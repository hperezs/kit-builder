module.exports = {
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
