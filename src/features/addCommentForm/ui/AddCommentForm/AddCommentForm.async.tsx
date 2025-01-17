import { lazy } from 'react';
import AddCommentForm from './AddCommentForm';

export const AddCommentFormAsync = lazy<typeof AddCommentForm>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
