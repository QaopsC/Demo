// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import loginData from "../fixtures/login.json";
import administracion from "../fixtures/administracion.json";

Cypress.Commands.add("login", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/");
    cy.get(loginData.inputUsername).type(username);
    cy.get(loginData.loginButton).click();
    cy.get(loginData.inputPassword).type(password);
    cy.get(loginData.loginButton).click();
  });
});

Cypress.Commands.add("createtag", (tagname, description) => {
  cy.get(administracion.nameInput).type(tagname);
  cy.get(administracion.descripcionTextArea).type(description);
  cy.get(administracion.crearEtiquetaButton).click();
});
