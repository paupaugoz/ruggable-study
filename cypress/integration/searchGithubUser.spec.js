describe('Searching for a Github User', () => {
    // Tests may be flaky without using cy.intercept as it does not wait for the value
    it('should be able to find my Github profile, and return a list of repositories', () => {
        cy.visit('/');
        cy.findByText('Search for a Github User...').should('exist').click({ force: true });
        cy.get("[type='text']").type('paupaugoz');

        cy.findByText('paupaugoz').should('exist').click();

        cy.findByText('paupaugoz/ruggable-study').should('exist');
    });

    it('should be able to find all repositories owned by Facebook sorted by most number of stars', () => {
        cy.visit('/');
        // cy.findByText('Search for a Github User...').should('exist').click({ force: true });
        cy.get("[type='text']").type('facebook');

        cy.findByText('facebook').should('exist').click();

        // First list child should contain facebook/react
        cy.get('li').eq(0).contains('facebook/react').should('exist');

       // Second list child should contain facebook/react-native
        cy.get('li').eq(1).contains('facebook/react-native').should('exist');
    });
});
