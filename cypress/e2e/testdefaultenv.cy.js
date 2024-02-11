describe('test default environment from cypress.config.js', () => {
    it('should navigate to default base url https://www.google.com/', () => {
      cy.visit('/')
      cy.url().should('eq', 'https://www.google.com/');
      cy.log(`default user name is: ${Cypress.env('username')}`)
    })
  })