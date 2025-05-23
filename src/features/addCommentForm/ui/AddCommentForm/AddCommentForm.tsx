import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;

    const { t } = useTranslation();

    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((text: string) => {
        dispatch(addCommentFormActions.setText(text));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [text, onSendComment, onCommentTextChange]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
            <HStack
                data-testid="AddCommentForm"
                justify="between"
                max
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    data-testid="AddCommentForm.Input"
                    onChange={onCommentTextChange}
                />
                <Button
                    data-testid="AddCommentForm.Button"
                    theme={ButtonTheme.OUTLINED}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}

                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
