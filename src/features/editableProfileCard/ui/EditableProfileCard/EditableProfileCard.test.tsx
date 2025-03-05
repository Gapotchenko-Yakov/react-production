import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Moscow',
    username: 'admin213',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('switch readonly mode', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        expect(screen.getByRole('button', { name: /редактировать/i })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: /отменить/i })).not.toBeInTheDocument();

        await userEvent.click(screen.getByRole('button', { name: /редактировать/i }));
        expect(screen.getByRole('button', { name: /отменить/i })).toBeInTheDocument();
        await userEvent.click(screen.getByRole('button', { name: /отменить/i }));
        expect(screen.getByRole('button', { name: /редактировать/i })).toBeInTheDocument();
    });

    test('restore values after cancelling', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        const firstnameInput = screen.getByRole('textbox', { name: /ваше имя/i });
        const lastnameInput = screen.getByRole('textbox', { name: /ваша фамилия/i });
        const editBtn = screen.getByRole('button', { name: /редактировать/i });

        expect(firstnameInput).not.toBe(lastnameInput);

        await userEvent.click(editBtn);

        await userEvent.clear(firstnameInput);
        await userEvent.clear(lastnameInput);

        expect(firstnameInput).toHaveValue('');
        expect(lastnameInput).toHaveValue('');

        await userEvent.type(firstnameInput, 'user first');
        await userEvent.type(lastnameInput, 'user last');

        expect(firstnameInput).toHaveValue('user first');
        expect(lastnameInput).toHaveValue('user last');

        const cancelBtn = screen.getByRole('button', { name: /отменить/i });

        await userEvent.click(cancelBtn);

        expect(firstnameInput).toHaveValue('admin');
        expect(lastnameInput).toHaveValue('admin');
    });

    test('error message if validation failed', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByRole('button', { name: /редактировать/i }));

        await userEvent.clear(screen.getByRole('textbox', { name: /ваша фамилия/i }));

        await userEvent.click(screen.getByRole('button', { name: /сохранить/i }));

        // expect(screen.getByText(/имя и фамилия обязательны/i)).toBeInTheDocument(); // TODO
    });

    test('if validation check is ok then send PUT query', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByRole('button', { name: /редактировать/i }));

        await userEvent.type(screen.getByRole('textbox', { name: /ваша фамилия/i }), 'some_lastname');

        await userEvent.click(screen.getByRole('button', { name: /сохранить/i }));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
