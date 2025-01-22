import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
    test('filfilled', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                page: 2,
                limit: 5,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({});
    });

    test('fetchAritcleList not called if hasMore is false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                page: 2,
                limit: 5,
                hasMore: false, // fetchAritcleList not called
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('fetchAritcleList not called if isLoading is true', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                isLoading: true,
                error: undefined,
                ids: [],
                entities: {},
                view: ArticleView.SMALL,
                page: 2,
                limit: 5,
                hasMore: true, // fetchAritcleList not called
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
