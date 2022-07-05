describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the heading', () => {
    cy.get('h1').contains('Next.js Starter');
  });
});
