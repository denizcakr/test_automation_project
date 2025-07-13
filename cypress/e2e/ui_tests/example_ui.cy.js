describe('UI Test - Example Cypress', () => {
  it('Sayfa açılır ve form doldurulur', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-email').type('deneme@example.com')
    cy.get('.action-form').submit()
  })
})