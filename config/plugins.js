module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),
        containerName: env("STORAGE_CONTAINER_NAME"),
        defaultPath: env("STORAGE_DEFAULT_PATH"),
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        keysPrefix: "uht-herisau",
        maxAge: 2592000000, // 30 days
        debug: false,
        hitpass: false, // also cache requests with Authorization headers set
        contentTypes: [
          // list of Content-Types UID to cache
          "api::category.category",
          "api::page.page",
          "api::registration.registration",
          "api::sponsor.sponsor",
        ],
      },
    },
  },
});
