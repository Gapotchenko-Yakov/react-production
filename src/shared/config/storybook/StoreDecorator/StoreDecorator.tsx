import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    initialState: DeepPartial<StateSchema>,
    asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={initialState}
        asyncReducers={{
            ...defaultAsyncReducers,
            ...asyncRedusers,
        }}
    >
        <StoryComponent />
    </StoreProvider>
);
