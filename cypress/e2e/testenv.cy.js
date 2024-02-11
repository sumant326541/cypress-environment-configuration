describe('test environment from cypress.env.json', () => {
    it('should navigate to prod https://demo.nopcommerce.com/', () => {
      cy.visit(Cypress.env('prod_url'))
      cy.url().should('eq', 'https://demo.nopcommerce.com/');
    })
    it('should navigate to stage https://demoqa.com/', () => {
        cy.visit(Cypress.env('stage_url'))
        cy.url().should('eq', 'https://demoqa.com/');
      })
  })