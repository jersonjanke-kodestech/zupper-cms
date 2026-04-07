import { factories } from "@strapi/strapi";

const transformImageResponse = (atracao: any) => {
  if (atracao?.imagem) {
    const imagem = atracao.imagem;
    let url = imagem.url;

    // Se a URL for relativa, converter para URL completa da AWS
    if (url && url.startsWith("/uploads/")) {
      const bucket = process.env.AWS_BUCKET;
      const region = process.env.AWS_REGION;
      const filename = url.split("/").pop();
      url = `https://${bucket}.s3.${region}.amazonaws.com/${filename}`;
    }

    atracao.imagem = {
      url,
      name: imagem.name,
      size: imagem.sizeInBytes || imagem.size,
      mime: imagem.mime,
    };
  }
  return atracao;
};

export default factories.createCoreController(
  "api::atracao.atracao",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = { imagem: true };
      const response = await super.find(ctx);

      if (response.data && Array.isArray(response.data)) {
        response.data = response.data.map(transformImageResponse);
      }

      return response;
    },
    async findOne(ctx) {
      ctx.query.populate = { imagem: true };
      const response = await super.findOne(ctx);

      if (response.data) {
        response.data = transformImageResponse(response.data);
      }

      return response;
    },
  }),
);
