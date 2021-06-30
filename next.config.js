module.exports = {
    webpack5: false,
    webpack(config) {
      config.node = {
        dns: "mock",
        fs: "empty",
        path: true,
        url: false,
      };

      return config;
    },
    images: {
      domains: ['backstreet-surveillance.com'],
    },
    env: {
      BEARER_TOKEN: process.env.BEARER_TOKEN,
      IPREGISTRY_KEY: process.env.IPREGISTRY_KEY,
      MONGO_URI: process.env.MONGO_URI,
      GA_ID: process.env.GA_ID
    }
  }