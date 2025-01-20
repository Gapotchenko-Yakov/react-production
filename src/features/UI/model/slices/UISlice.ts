import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
    scroll: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScroll: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },

});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
