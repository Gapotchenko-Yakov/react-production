import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            ARTICLE DETAILS FOR
            {' '}
            {id}
        </div>
    );
};
