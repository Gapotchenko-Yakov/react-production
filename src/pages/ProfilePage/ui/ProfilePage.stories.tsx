import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
// import AvatarImg from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

const AvatarImg = 'https://pic.rutubelist.ru/user/b1/6e/b16e8e86585f1ceb8d8c622266ef2648.jpg'; // TODO

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Иван',
                lastname: 'Петров',
                age: 27,
                currency: Currency.USD,
                country: Country.Belarus,
                city: 'Moscow',
                username: 'admin12',
                avatar: AvatarImg,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: 'Иван',
                lastname: 'Петров',
                age: 27,
                currency: Currency.USD,
                country: Country.Belarus,
                city: 'Moscow',
                username: 'admin12',
                avatar: AvatarImg,
            },
        },
    }),
];
