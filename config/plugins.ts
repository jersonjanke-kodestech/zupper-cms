import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  const useS3 = !!(
    env("AWS_ACCESS_KEY_ID") &&
    env("AWS_SECRET_ACCESS_KEY") &&
    env("AWS_BUCKET") &&
    env("AWS_REGION")
  );

  if (!useS3) {
    return {};
  }

  return {
    upload: {
      config: {
        provider: "@strapi/provider-upload-aws-s3",
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
            },
            region: env("AWS_REGION"),
          },
          params: {
            Bucket: env("AWS_BUCKET"),
            ACL: env("AWS_ACL", "public-read"),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};

export default config;
