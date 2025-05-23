describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login();
        cy.visit('articles');
    });

    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('и статьи успешно подгружаются (из фикстуры)', () => {
        cy.intercept('GET', '**articles*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it.skip('и тест пропускается', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        cy.get('not-exist-a83jsh').should('exist');
    });
});
