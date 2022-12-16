// https://docs.cypress.io/api/introduction/api.html

describe("Example Test", { testIsolation: false }, () => {
  const user = "Tester_User";

  it("visits the app root url", () => {
    cy.visit("/");
  });

  it("should display LoginComponent", () => {
    cy.get("#login-component-container").should("be.visible");
  });

  it("should pass user name as route prop", () => {
    cy.get("#user-input").type(user, { delay: 50 });
    cy.get("#password-input").type("123123", { delay: 50 });

    cy.get(".login-button").click();

    cy.url().should("include", user);
  });

  it("should show the route prop on LoginConfirmationComponent", () => {
    cy.get("#login-confirmation-component-container").contains(user);
  });
});
