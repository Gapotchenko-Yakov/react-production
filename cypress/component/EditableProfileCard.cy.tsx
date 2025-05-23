import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });

    cy.intercept('PUT', '**/profile/*', { statusCode: 200 }).as('saveProfile');

    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                id: USER_ID,
              },
            },
          },
        }}
      >
        <EditableProfileCard id={USER_ID} />
      </TestProvider>,
    );
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'user');

    cy.updateProfile('first', 'last');

    cy.wait('@saveProfile');

    cy.getByTestId('ProfileCard.firstname').should('have.value', 'first');
    cy.getByTestId('ProfileCard.lastname').should('have.value', 'last');
  });
});
