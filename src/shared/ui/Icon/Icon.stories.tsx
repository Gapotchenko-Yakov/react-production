import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import EyeIcon from '@/shared/assets/icons/outline/eye.svg';
import { Icon } from './Icon';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Eye = Template.bind({});
Eye.args = {
    Svg: EyeIcon,
};

export const EyeDark = Template.bind({});
EyeDark.args = {
    Svg: EyeIcon,
};
EyeDark.decorators = [ThemeDecorator(Theme.DARK)];
