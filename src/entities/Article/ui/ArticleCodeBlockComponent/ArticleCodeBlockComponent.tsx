import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            CODE
        </div>
    );
};
