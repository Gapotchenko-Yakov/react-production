import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

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
    primary: true,
    label: 'Button',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    label: 'Button',
};
