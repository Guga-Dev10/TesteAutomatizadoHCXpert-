import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("eu solicito os detalhes da ação {string} via API", (actionId) => {
  cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/actions/${actionId}`,
    failOnStatusCode: false
  }).as('trelloResponse');
});

Then("o status code da resposta deve ser 200", () => {
  cy.get('@trelloResponse').its('status').should('eq', 200);
});

Then("o log deve exibir o nome da lista associada a essa ação", () => {
  cy.get('@trelloResponse').then((response) => {
    // Extraindo o campo 'name' dentro da estrutura 'list'
    const listName = response.body.data.list.name;
    
    cy.log(`Nome da Lista: ${listName}`);
    
    // Validação adicional para garantir que o campo existe
    expect(listName).to.not.be.undefined;
    expect(listName).to.be.a('string');
  });
});
