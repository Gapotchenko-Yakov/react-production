import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/article/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
    },
    decorators: [
        withMock,
    ],
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;
const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [
    StoreDecorator({

    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_page=2&_limit=9&_sort=created&_order=asc&q=`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
                { ...article, id: '4' },
                { ...article, id: '5' },
                { ...article, id: '6' },
                { ...article, id: '7' },
                { ...article, id: '8' },
                { ...article, id: '9' },
            ],
        },
    ],
};
