import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            Article text block
        </div>
    );
};
