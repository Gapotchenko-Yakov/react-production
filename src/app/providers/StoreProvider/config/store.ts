import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export const createReduxStore = (initialState?: StateSchema) => configureStore({
    reducer: {},
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
