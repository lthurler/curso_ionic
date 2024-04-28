import { describe, it, cy } from "cypress";

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("#container", "Ready to create an app?");
  });


});
 