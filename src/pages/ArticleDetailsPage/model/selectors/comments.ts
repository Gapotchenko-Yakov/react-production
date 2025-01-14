import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
export const getArticleCommentsData = (state: StateSchema) => state.articleDetailsComments?.data;
