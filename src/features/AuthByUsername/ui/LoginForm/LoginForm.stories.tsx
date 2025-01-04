import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'some_user',
            password: 'some_password',
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'some_user',
            password: 'some_password',
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'some_user',
            password: 'some_password',
            isLoading: true,
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'some_user',
            password: 'some_password',
            error: 'Error has occured.',
        },
    }),
];
