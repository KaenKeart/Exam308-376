const dataLogin = require("../../fixtures/login.json")

const { default: loginPage, default: loginpage } = require("../../support/page_object/loginpage")

describe('internet', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login')
    })
    it('tc-01', () => {
        cy.login(dataLogin.username.positive, dataLogin.password.positive)
        cy.get('#flash').contains('You logged into a secure area!')
        // loginPage.verifyLoginSucessText()
        cy.get('.button').click()
        cy.get('#flash').contains('You logged out of the secure area!')
        // loginpage.verifyLogoutSucessText()

    })
    it('tc-02', () => {
        cy.login(dataLogin.username.negative, dataLogin.password.positive)
        cy.get('#flash').contains('Your username is invalid!')
        // loginPage.verifyLoginErrorUsername()

    })
    it('tc-03', () => {
        cy.login(dataLogin.username.positive, dataLogin.password.negative)
        cy.get('#flash').contains('Your password is invalid!')
        // loginPage.verifyLoginErrorPassword

    })


})