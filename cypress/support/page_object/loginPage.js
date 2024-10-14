class loginPage {
    get loginSucessText() {
        return cy.get('#flash')
    }

    verifyLoginSucessText() {
        this.loginSucessText.should('have.text', 'You logged into a secure area!')
    }
    get loginErrorUsername() {
        return cy.get('#flash')
    }

    verifyLoginErrorUsername() {
        this.loginErrorUsername.should('have.text', 'Your username is invalid!')
    }
    get loginErrorPassword() {
        return cy.get('#flash')
    }
    verifyLoginErrorPassword() {
        this.loginErrorPassword.should('have.text', 'Your password is invalid!')
    }

    get logoutSucessText() {
        return cy.get('#flash')
    }
    verifyLogoutSucessText() {
        this.logoutSucessText.should('have.text', 'You logged out of the secure area!')
    }

}
export default new loginPage();