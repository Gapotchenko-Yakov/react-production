import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

const notification: Notification = {
    id: '1',
    title: 'IMPORTANT',
    description: 'Attention: you should ...',
};

export const Normal = Template.bind({});
Normal.args = {
    item: notification,
};
