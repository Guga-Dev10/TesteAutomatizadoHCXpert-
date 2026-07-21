import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Trello API
When("eu consulto os detalhes da acao {string} no Trello", (actionId) => {
  cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/actions/${actionId}`,
    failOnStatusCode: false
  }).as('apiResponse');
});

Then("o nome da lista associada deve ser exibido no console de execucao", () => {
  cy.get('@apiResponse').then((response) => {
    const listName = response.body.data.list.name;
    cy.log(`### NOME DA LISTA: ${listName} ###`);
    expect(listName).to.not.be.undefined;
  });
});

// Automation Exercise API
When("eu envio um POST para o endpoint {string} sem o parametro {string}", (endpoint, param) => {
  cy.request({
    method: 'POST',
    url: endpoint,
    body: {}, // Corpo vazio para simular falta de parâmetro
    failOnStatusCode: false
  }).as('apiResponse');
});

Then("a resposta JSON deve conter a mensagem {string}", (expectedMessage) => {
  cy.get('@apiResponse').its('body.message').should('eq', expectedMessage);
});

// Common
Then("o status code da resposta deve ser {int}", (statusCode) => {
  cy.get('@apiResponse').its('status').should('eq', statusCode);
});
