const { defineConfig } = require("cypress");
const dotenv = require("cypress-dotenv");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      return dotenv(config); 
    },
  },
  env: {
    senhaLogin: process.env.senhaLogin,
    emailLogin: process.env.emailLogin,
    idLogin: process.env.idLogin 
  },
});
