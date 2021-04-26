module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });

      return config;
    },
    images: {
      domains: ['backstreet-surveillance.com'],
    },
    env: {
      BEARER_TOKEN: process.env.BEARER_TOKEN,
      IPREGISTRY_KEY: process.env.IPREGISTRY_KEY,
    }
  }