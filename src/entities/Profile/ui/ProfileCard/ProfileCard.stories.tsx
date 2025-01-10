import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    data: {
        first: 'Иван',
        lastname: 'Петров',
        age: 27,
        currency: Currency.USD,
        country: Country.Belarus,
        city: 'Moscow',
        username: 'admin12',
        avatar: AvatarImg,
    },
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        first: 'Иван',
        lastname: 'Петров',
        age: 27,
        currency: Currency.USD,
        country: Country.Belarus,
        city: 'Moscow',
        username: 'admin12',
        avatar: AvatarImg,
    },
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const WithError = Template.bind({});
WithError.args = {
    error: 'Some error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
