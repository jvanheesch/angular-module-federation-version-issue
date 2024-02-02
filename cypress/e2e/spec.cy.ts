describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.get('button').click();
    cy.wait(2000);
    cy.get('#emitted').invoke('text').should('eq', 'false');
  })
})
