import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../support/page_objects/loginPage";

Given("que eu esteja na pagina de login", () => {
  loginPage.visit();
});

When("eu insiro as credenciais da fixture {string}", (fixtureName) => {
  cy.fixture(fixtureName).then((data) => {
    loginPage.login(data.user.email, data.user.password);
  });
});

When("eu tento logar com o email {string} e senha {string}", (email, password) => {
  loginPage.login(email, password);
});

Then("devo ver o nome do usuario na barra de navegacao", () => {
  cy.get('li a').contains('Logged in as').should('be.visible');
});

Then("devo ver a mensagem de erro {string}", (message) => {
  loginPage.elements.errorMessage().should('contain.text', message);
});
