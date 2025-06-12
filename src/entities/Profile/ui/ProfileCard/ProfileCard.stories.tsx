import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

const primaryArgs = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'Ivanov',
        first: 'asd1',
        city: 'asf',
        currency: Currency.USD,
        avatar,
    },
};

// TODO - screen differs from reference - ? feature flags problems
// export const Primary = Template.bind({});
// Primary.args = { ...primaryArgs };

// export const PrimaryRedesigned = Template.bind({});
// PrimaryRedesigned.args = { ...primaryArgs };
// PrimaryRedesigned.decorators = [NewDesignDecorator];

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
