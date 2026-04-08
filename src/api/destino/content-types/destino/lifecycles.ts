/**
 * Lifecycle hooks — api::destino.destino
 *
 * Dispara o webhook de revalidação no frontend após publish/unpublish/delete.
 * O frontend (Next.js ISR) limpa o cache da página afetada instantaneamente.
 */

async function triggerRevalidation(slug?: string) {
  const clientUrl = process.env.CLIENT_URL;
  const secret = process.env.REVALIDATE_SECRET;

  if (!clientUrl || !secret) {
    strapi.log.warn('[lifecycles:destino] CLIENT_URL ou REVALIDATE_SECRET não configurados.');
    return;
  }

  try {
    const res = await fetch(`${clientUrl}/api/revalidate-destinos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-revalidate-secret': secret,
      },
      body: JSON.stringify({ slug }),
    });

    if (!res.ok) {
      strapi.log.error(`[lifecycles:destino] Revalidação falhou: ${res.status}`);
    } else {
      strapi.log.info(`[lifecycles:destino] Revalidado: ${slug ?? 'lista'}`);
    }
  } catch (err) {
    strapi.log.error(`[lifecycles:destino] Erro ao chamar webhook: ${err}`);
  }
}

export default {
  async afterPublish(event: any) {
    await triggerRevalidation(event.result?.slug);
  },

  async afterUnpublish(event: any) {
    await triggerRevalidation(event.result?.slug);
  },

  async afterDelete(event: any) {
    await triggerRevalidation(event.result?.slug);
  },

  async afterDeleteMany() {
    // Sem slug específico — revalida só a lista
    await triggerRevalidation();
  },
};
