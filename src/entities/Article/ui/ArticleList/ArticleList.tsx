import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    AutoSizer, List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            key={index}
            view={view}
            className={cls.card}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const { t } = useTranslation();

    const rowRender = ({
        index, key, style,
    }: ListRowProps) => {
        console.log('rowRender');

        return (
            <div
                key={key}
                style={style}
            >
                <ArticleListItem
                    article={articles[index]}
                    view={view}
                    className={cls.card}
                    target={target}
                />
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width,
                height,

            }) => (
                <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                    <List
                        height={height}
                        rowCount={articles.length}
                        rowHeight={500}
                        rowRenderer={rowRender}
                        width={width}
                    />
                    {isLoading && getSkeletons(view) }
                </div>

            )}
        </WindowScroller>

    );
});
