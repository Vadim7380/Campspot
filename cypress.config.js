const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":  "https://www.campspot.com/",
    "viewportHeight": 1000,
    "viewportWidth": 1600,
    "numTestsKeptInMemory": 0,
    "defaultCommandTimeout": 4000,
    "screenshotOnRunFailure": true,
    "video": false,
    "retries": 0,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      },
  },
  env:{
    "User": "prikhodkovn@gmail.com",
    "Password": "AN53super!",
  }
});




