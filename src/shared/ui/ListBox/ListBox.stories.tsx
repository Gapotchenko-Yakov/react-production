import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ListBox, ListBoxItem } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },

} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

const options: ListBoxItem[] = [
    { value: 'Option 1', content: 'Option 1' },
    { value: 'Option 2', content: 'Option 2' },
    { value: 'Option 3', content: 'Option 3' },
    { value: 'Option 4', content: 'Option 4' },
    { value: 'Option 5', content: 'Option 5' },
];

export const TopLeftLight = Template.bind({});
TopLeftLight.args = {
    direction: 'top left',
    value: 'Option 2',
    items: options,
};
TopLeftLight.decorators = [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
];

export const TopRightLight = Template.bind({});
TopRightLight.args = {
    direction: 'top right',
    value: 'Option 2',
    items: options,
};
TopRightLight.decorators = [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
];

export const BottomLeftLight = Template.bind({});
BottomLeftLight.args = {
    direction: 'bottom left',
    value: 'Option 2',
    items: options,
};
BottomLeftLight.decorators = [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
];

export const BottomRightLight = Template.bind({});
BottomRightLight.args = {
    direction: 'bottom right',
    value: 'Option 2',
    items: options,
};
BottomRightLight.decorators = [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
];

export const BottomRightDark = Template.bind({});
BottomRightDark.args = {
    onChange: action('onChange'),
    value: 'Option 1',
    defaultValue: 'Option 1',
    label: 'Выберите опцию',
    items: options,
    readonly: false,
    direction: 'bottom right',
};
BottomRightDark.decorators = [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ThemeDecorator(Theme.DARK),
];
