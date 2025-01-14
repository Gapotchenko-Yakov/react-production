import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const initialState: ArticleDetailsCommentsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailsComments = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
                state.data = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.data = undefined;
            });
    },
});

export const { actions: articleDetailsCommentsActions } = articleDetailsComments;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsComments;
