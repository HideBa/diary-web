module.exports = mode => ({
  env: {
    API_ENDPOINT: "localhost:8001",
    FIREBASE_KEY: process.env.FIREBASE_KEY,
    FIREBASE_DOMAIN: process.env.FIREBASE_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  },
});
