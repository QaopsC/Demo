import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from '../../pages/logIn.page'
import loginData from '../../fixtures/login.json'
Given('The user visit {string}', (url) =>{
    cy.visit(url)
})

When ('The user logs in with username: {string} and password: {string}', (user, pass) => {
    cy.get(loginData.inputUsername).type(user);
    cy.get(loginData.loginButton).click();
    cy.get(loginData.inputPassword).type(pass);
    cy.get(loginData.loginButton).click();
});


Then('The sign {string} with the message {string} should be visible', (sign, message) => {
    cy.get(loginData[sign]).should("contain", message)
})
 