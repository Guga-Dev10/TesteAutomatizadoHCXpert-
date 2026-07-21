const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

const esbuildPluginModule = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createEsbuildPlugin = esbuildPluginModule.createEsbuildPlugin || esbuildPluginModule;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    // ADICIONE ESTA LINHA COM A URL ALVO DO EDITAL:
    baseUrl: "https://www.automationexercise.com",
    
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
  },
});