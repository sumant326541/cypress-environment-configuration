module.exports = {
  video: true,
  e2e: {
    baseUrl: "https://www.google.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }, env: {
    username: "defaultusername"
  },
};
