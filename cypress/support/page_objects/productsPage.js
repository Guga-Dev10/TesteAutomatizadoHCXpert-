class ProductsPage {
  // Seletores (Locators)
  elements = {
    searchField: () => cy.get('#search_product'),
    searchButton: () => cy.get('#submit_search'),
    searchedTitle: () => cy.get('.title.text-center'),
    productItems: () => cy.get('.single-products'),
    productName: (name) => cy.get('.productinfo p').contains(name)
  }

  // Ações (Methods)
  visit() {
    cy.visit('/products');
  }

  searchProduct(productName) {
    this.elements.searchField().clear().type(productName);
    this.elements.searchButton().click();
  }

  getSearchedTitle() {
    return this.elements.searchedTitle();
  }

  validateProductVisible(name) {
    this.elements.productName(name).should('be.visible');
  }

  validateNoProductsFound() {
    this.elements.productItems().should('not.exist');
  }
}

export default new ProductsPage();
