import type { Core } from '@strapi/strapi';

const getPreviewPathname = (uid: string, { document }: { locale?: string; document: Record<string, any> }): string | null => {
  if (uid === 'api::destino.destino') {
    return `/destinos/${document.slug}`;
  }
  return null;
};

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('CLIENT_URL')],
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid as any).findOne({ documentId });
        if (!document) return null;

        const pathname = getPreviewPathname(uid, { locale, document });
        if (!pathname) return null;

        const clientUrl = env('CLIENT_URL');
        const previewSecret = env('PREVIEW_SECRET');

        const params = new URLSearchParams({
          secret: previewSecret,
          slug: pathname,
          ...(status === 'draft' && { status: 'draft' }),
        });

        return `${clientUrl}/api/preview?${params.toString()}`;
      },
    },
  },
});

export default config;
