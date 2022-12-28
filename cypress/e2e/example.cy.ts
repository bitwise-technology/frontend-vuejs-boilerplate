// https://docs.cypress.io/api/introduction/api.html
describe("Example Test", { testIsolation: false }, () => {
  const email = "teste@mail.com";
  const password = "123123";

  it("visits the app root url", () => {
    cy.visit("/");
  });

  it("should navigate to LoginView on button click", () => {
    cy.get("#navigate-to-auth").click();

    cy.location("pathname").should("match", /\/login$/);
  });

  it("should display LoginComponent", () => {
    cy.get("#login-component-container").should("be.visible");
  });

  it("should save user state and navigate to login-confirmation", () => {
    cy.get("#user-input").type(email, { delay: 50 });
    cy.get("#password-input").type(password, { delay: 50 });

    cy.get("#login-button").click();

    cy.location("pathname").should("match", /\/login-confirmation$/);
  });

  it("should show email on LoginConfirmationComponent", () => {
    cy.get("#login-confirmation-component-container").contains(email);
  });
});
