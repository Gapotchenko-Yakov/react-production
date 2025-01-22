import { lazy } from 'react';
import AddCommentForm from './AddCommentForm';

export const AddCommentFormAsync = lazy<typeof AddCommentForm>(() => import('./AddCommentForm'));
