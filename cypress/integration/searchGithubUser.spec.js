describe('Searching for a Github User', () => {
    it('should be able to find my Github profile, and return a list of repositories', () => {
        cy.visit('/');
        cy.findByText('Search for a Github User...').should('exist').click({ force: true });
        cy.get("[type='text']").type('paupaugoz');

        cy.findByText('paupaugoz').should('exist').click();

        cy.findByText('paupaugoz/ruggable-study').should('exist');
    });
});
