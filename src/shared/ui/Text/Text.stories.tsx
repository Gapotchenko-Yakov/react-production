import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',

};

export const PrimaryOnlyTitle = Template.bind({});
PrimaryOnlyTitle.args = {
    title: 'title',
};

export const PrimaryOnlyText = Template.bind({});
PrimaryOnlyText.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',
};

export const ErrorOnlyTitle = Template.bind({});
ErrorOnlyTitle.args = {
    title: 'title',
    theme: TextTheme.ERROR,
};

export const ErrorOnlyText = Template.bind({});
ErrorOnlyText.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',
    theme: TextTheme.ERROR,
};

export const PrimaryOnlyTitleDark = Template.bind({});
PrimaryOnlyTitleDark.args = {
    title: 'title',
};
PrimaryOnlyTitleDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const PrimaryOnlyTextDark = Template.bind({});
PrimaryOnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',
};
PrimaryOnlyTextDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const ErrorOnlyTitleDark = Template.bind({});
ErrorOnlyTitleDark.args = {
    title: 'title',
    theme: TextTheme.ERROR,
};
ErrorOnlyTitleDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const ErrorOnlyTextDark = Template.bind({});
ErrorOnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',
    theme: TextTheme.ERROR,
};
ErrorOnlyTextDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const FontSizeM = Template.bind({});
FontSizeM.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',
    size: TextSize.M,
};

export const FontSizeL = Template.bind({});
FontSizeL.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',
    size: TextSize.L,
};

export const FontSizeS = Template.bind({});
FontSizeS.args = {
    title: 'title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut consectetur ad dolor odio earum vero! Saepe repellendus mollitia, maxime totam eveniet corporis, architecto laborum aliquid libero tempore placeat ut.',
    size: TextSize.S,
};
