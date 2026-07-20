class LoginPage {
  elements = {
    loginField: () => cy.get('[data-qa="login-email"]'),
    passwordField: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    loginTitle: () => cy.get('.login-form h2'),
    errorMessage: () => cy.get('.login-form p')
  }

  visit() {
    cy.visit('/login');
  }

  login(email, password) {
    this.elements.loginField().type(email);
    this.elements.passwordField().type(password);
    this.elements.loginButton().click();
  }
}

export default new LoginPage();
