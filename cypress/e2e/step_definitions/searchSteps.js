import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import productsPage from "../../support/page_objects/productsPage";

Given("que eu esteja na página de produtos", () => {
  productsPage.visit();
});

When("eu pesquiso pelo produto {string}", (productName) => {
  productsPage.searchProduct(productName);
});

Then("devo ver a seção {string}", (expectedTitle) => {
  productsPage.getSearchedTitle()
    .should('be.visible')
    .and('contain.text', expectedTitle);
});

Then("o produto {string} deve estar visível na lista de resultados", (productName) => {
  productsPage.validateProductVisible(productName);
});

Then("nenhum produto deve ser exibido na lista de resultados", () => {
  productsPage.validateNoProductsFound();
});
