import loginData from '../fixtures/login.json';
class loginPage{
    emailLogInInput(){
        return cy.get(loginData.inputLogInEmail)
    }
    passwordInput(){
        return cy.get(loginData.inputPassword)
    }
    submitButton(){
        return cy.get(loginData.submitButton) 
    }
}
export default new loginPage();