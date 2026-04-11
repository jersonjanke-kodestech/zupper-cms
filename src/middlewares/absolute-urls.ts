import type { Core } from '@strapi/strapi';

const prefixUrl = (value: unknown, baseUrl: string): unknown => {
  if (typeof value === 'string') {
    return value.startsWith('/uploads/') ? `${baseUrl}${value}` : value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => prefixUrl(item, baseUrl));
  }
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, prefixUrl(v, baseUrl)])
    );
  }
  return value;
};

export default (config: unknown, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    await next();

    const baseUrl = strapi.config.get<string>('server.url', '');

    if (!baseUrl || !ctx.body || typeof ctx.body !== 'object') return;
    if (!ctx.request.url.startsWith('/api/')) return;

    ctx.body = prefixUrl(ctx.body, baseUrl);
  };
};
