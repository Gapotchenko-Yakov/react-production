import { screen, render } from '@testing-library/react';
import Button from 'shared/ui/Button/Button';

describe('Button tests', () => {
    test('Button renders', () => {
        render(<Button> Test Button </Button>);
        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeInTheDocument();
    });
});
