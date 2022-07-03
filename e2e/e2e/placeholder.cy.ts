describe('Placeholder Test suite', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should view app title in header', () => {
    cy.get('app-header h1').contains('Seed APP');
  });
});
