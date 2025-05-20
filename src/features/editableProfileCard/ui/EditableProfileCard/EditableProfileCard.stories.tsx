import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'admin',
                age: 27,
                country: Country.Russia,
                lastname: 'some name',
                first: 'Ivan',
                city: 'asf',
                currency: Currency.RUB,
            },
        },
    }),
];
