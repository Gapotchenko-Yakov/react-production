import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: undefined,
};

export const addCommentForm = createSlice({
    name: 'addCommentFormSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentFormActions } = addCommentForm;
export const { reducer: addCommentFormReducer } = addCommentForm;
