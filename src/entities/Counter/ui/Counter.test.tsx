import { screen, render } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter renders', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const valueTitle = screen.getByTestId('value-title');

        expect(valueTitle).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const valueTitle = screen.getByTestId('value-title');
        const incBtn = screen.getByTestId('increment-btn');
        expect(valueTitle).toHaveTextContent('10');
        userEvent.click(incBtn);
        userEvent.click(incBtn);
        expect(valueTitle).toHaveTextContent('12');
    });

    test('decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const valueTitle = screen.getByTestId('value-title');
        const decBtn = screen.getByTestId('decrement-btn');
        expect(valueTitle).toHaveTextContent('10');
        userEvent.click(decBtn);
        userEvent.click(decBtn);
        userEvent.click(decBtn);
        expect(valueTitle).toHaveTextContent('7');
    });
});
