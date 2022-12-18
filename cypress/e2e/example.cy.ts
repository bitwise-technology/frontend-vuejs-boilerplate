// https://docs.cypress.io/api/introduction/api.html

describe("Example Test", { testIsolation: false }, () => {
  const email = "teste@mail.com";
  const password = "123123";

  it("visits the app root url", () => {
    cy.visit("/");
  });

  it("should display LoginComponent", () => {
    cy.get("#login-component-container").should("be.visible");
  });

  it("should pass user email as route prop", () => {
    cy.get("#user-input").type(email, { delay: 50 });
    cy.get("#password-input").type(password, { delay: 50 });

    cy.get(".login-button").click();

    cy.url().should("include", email);
  });

  it("should show the route prop on LoginConfirmationComponent", () => {
    cy.get("#login-confirmation-component-container").contains(email);
  });
});
