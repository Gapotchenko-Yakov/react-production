let currentArticleId = '';
const commentId = '';
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('И видит список рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('asd');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    // it('И оставляет комментарий (пример с стабом на фикстурах)', () => {
    //     cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    //     cy.getByTestId('ArticleDetails.Info').should('exist');
    //     cy.getByTestId('AddCommentForm').scrollIntoView();
    //     cy.addComment('asd');
    //     cy.getByTestId('CommentCard.Content').should('have.length', 1);
    // });
    // it('И ставит оценку', () => {
    //     cy.getByTestId('ArticleDetails.Info').should('exist');
    //     cy.getByTestId('RatingCard').scrollIntoView();
    //     cy.setRate(2, 'low');
    //     cy.getByTestId('[data-selected=true]').should('have.length', 2);
    // });
});
