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
      BEARER_TOKEN: '13y20n0rg075ebk2pn27n8pos2qloh6y'
    }
  }