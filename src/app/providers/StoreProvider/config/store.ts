import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
