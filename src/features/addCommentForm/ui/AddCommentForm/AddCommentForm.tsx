import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.AddCommentForm, {}, [className])} />
    );
});

export default AddCommentForm;
