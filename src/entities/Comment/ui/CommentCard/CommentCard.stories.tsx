import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'Some interesting comment.',
        articleId: '1',
        user: { id: '1', username: 'Peter' },
    },
};
Normal.decorators = [

];

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'Some interesting comment.',
        articleId: '1',
        user: { id: '1', username: 'Peter' },
    },
    isLoading: true,
};
Loading.decorators = [

];
