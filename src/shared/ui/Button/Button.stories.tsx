import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
    size: ButtonSize.XL,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
