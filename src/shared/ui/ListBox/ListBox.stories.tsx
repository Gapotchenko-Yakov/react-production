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

export const BottomLight = Template.bind({});
BottomLight.args = {
    onChange: action('onChange'),
    value: 'Option 1',
    defaultValue: 'Option 1',
    label: 'Выберите опцию',
    items: options,
    readonly: false,
    direction: 'bottom',
};

export const BottomDark = Template.bind({});
BottomDark.args = {
    onChange: action('onChange'),
    value: 'Option 1',
    defaultValue: 'Option 1',
    label: 'Выберите опцию',
    items: options,
    readonly: false,
    direction: 'bottom',
};
BottomDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
