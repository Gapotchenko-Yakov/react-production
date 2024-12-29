import { screen, render, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar tests', () => {
    test('Sidebar toggler works correctly', () => {
        render(<Sidebar />);
        const sidebarElement = screen.getByTestId('sidebar');
        const toggleBtnElement = screen.getByText('Toggle');
        expect(sidebarElement).toBeInTheDocument();
        expect(sidebarElement).not.toHaveClass('collapsed');

        fireEvent.click(toggleBtnElement);

        expect(sidebarElement).toHaveClass('collapsed');

        fireEvent.click(toggleBtnElement);

        expect(sidebarElement).not.toHaveClass('collapsed');
    });
});
