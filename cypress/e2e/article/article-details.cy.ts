let currentArticleId = '';
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
        cy.getByTestId('AddCommentForm.Input').clear().type('ecf');
        cy.getByTestId('AddCommentForm.Button').click();
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    // it('И ставит оценку', () => {
    //     cy.getByTestId('ArticleDetails.Info').should('exist');
    //     cy.getByTestId('RatingCard').scrollIntoView();
    //     cy.getByTestId('StarRating.2').click();
    //     cy.getByTestId('RatingCard.Input').clear().type('low');
    //     cy.getByTestId('RatingCard.Send').click();
    //     cy.getByTestId('[data-selected=true]').should('have.length', 2);
    // });
});
