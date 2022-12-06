import { defineConfig } from "cypress";

//Cypress config options:
//https://docs.cypress.io/guides/references/configuration#Configuration-File
export default defineConfig({
  video: false,
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
});
