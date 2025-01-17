import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {

                articles.length
                    ? articles.map((
                        article,
                    ) => (
                        <ArticleListItem
                            className={cls.card}
                            key={article.id}
                            view={view}
                            article={article}
                        />
                    ))
                    : null
            }
        </div>
    );
});
