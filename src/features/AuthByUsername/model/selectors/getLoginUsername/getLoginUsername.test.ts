import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return getLoginUsername', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'some_username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('some_username');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
