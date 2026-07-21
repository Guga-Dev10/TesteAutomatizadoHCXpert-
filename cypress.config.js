const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

const esbuildPluginModule = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createEsbuildPlugin = esbuildPluginModule.createEsbuildPlugin || esbuildPluginModule;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Inicializa o plugin do Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    // Caminho onde estão os seus arquivos .feature
    specPattern: "cypress/e2e/**/*.feature",
    
    // ADICIONE ESTA LINHA: Aponta exatamente onde estão os passos em JS/TS
    stepDefinitions: "cypress/e2e/step_definitions/**/*.js",
    
    supportFile: "cypress/support/e2e.js",
  },
});