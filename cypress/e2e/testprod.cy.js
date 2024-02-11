describe('test prod environment from prod.config.js', () => {
    it('should navigate to prod https://demo.nopcommerce.com', () => {
      cy.visit('')
      cy.url().should('eq', 'https://demo.nopcommerce.com/');
      cy.log(`prod user is: ${Cypress.env('username')}`)
    })
  })