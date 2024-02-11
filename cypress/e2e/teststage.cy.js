describe('test stage environment from stage.config.js', () => {
  it('should navigate to stage https://demoqa.com/', () => {
    cy.visit('/')
    cy.url().should('eq', 'https://demoqa.com/');
    cy.log(`stage user is: ${Cypress.env('username')}`)
  })
})