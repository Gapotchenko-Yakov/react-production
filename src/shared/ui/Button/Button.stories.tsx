import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    children: 'Button',
};

export const ClearButton = Template.bind({});
ClearButton.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
};
