import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="title" text="some text" />,
};
Normal.decorators = [

];

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="title" text="some text" />,
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];
