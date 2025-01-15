import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    error: undefined,
    text: undefined,
};

export const addCommentsForm = createSlice({
    name: 'addCommentsFormSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { actions: addCommentsFormActions } = addCommentsForm;
export const { reducer: addCommentsFormReducer } = addCommentsForm;
