import { screen, render } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button tests', () => {
    test('Button renders', () => {
        render(<Button> Test Button </Button>);
        const btnElement = screen.getByRole('button');
        expect(btnElement).toBeInTheDocument();
    });

    test('Button renders with class', () => {
        render(<Button> Test Button </Button>);
        const btnElement = screen.getByRole('button');
        expect(btnElement).toHaveClass('Button');
    });

    test('Button renders without very specific class', () => {
        render(<Button> Test Button </Button>);
        const btnElement = screen.getByRole('button');
        expect(btnElement).not.toHaveClass('some_very_spec_class_3234');
    });

    test('Button renders with clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}> Test Button </Button>);
        const btnElement = screen.getByRole('button');
        expect(btnElement).toHaveClass('clear');
    });
});
