import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginData from "../../fixtures/login.json";
import pagesData from "../../fixtures/pages.json";
import administracion from "../../fixtures/administracion.json";
import administrarEtiqueta from "../../fixtures/administrarEtiqueta.json";

Given("The user logs in to the page as an administrator", () => {
  cy.login(loginData.users.user, loginData.users.password);
  cy.visit("/");
});

Then("The user goes to {string}", (page) => {
  cy.get(`${pagesData[page]}`).click();
});

Then(
  "The user types {string} in {string} in page {string}",
  (text, element, page) => {
    cy.fixture(`${page}.json`).then((json) => {
      cy.get(json[element]).type(text);
    });
  }
);

Then("The user clicks on {string} in the page {string}", (element, page) => {
  cy.fixture(`${page}.json`).then((json) => {
    cy.get(json[element]).click();
  });
});

Then("The page {string} should be visible", (url) => {
  cy.url().should("contain", url);
});

Then(
  "The element {string} in page {string} should {string}",
  (element, page, assert) => {
    cy.fixture(`${page}.json`).then((json) => {
      cy.get(json[element]).should(`${assert}`);
    });
  }
);

Then(
  "The element {string} in page {string} should have text {string}",
  (element, page, text) => {
    cy.fixture(`${page}.json`).then((json) => {
      cy.get(json[element]).should("contain", text);
    });
  }
);

Then(
  "The user deletes text in element {string} in page {string}",
  (element, page) => {
    cy.fixture(`${page}.json`).then((json) => {
      cy.get(json[element]).clear();
    });
  }
);
