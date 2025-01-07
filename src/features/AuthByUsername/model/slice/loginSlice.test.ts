import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('should set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'old_username',
        };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('new_username'),
        )).toEqual({ username: 'new_username' });
    });

    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'old_password',
        };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('new_password'),
            ),
        ).toEqual({ password: 'new_password' });
    });
});
