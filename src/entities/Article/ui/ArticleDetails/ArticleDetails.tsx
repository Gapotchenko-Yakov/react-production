import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import Loader from 'shared/ui/Loader/Loader';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    className={cls.block}

                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    block={block}
                    className={cls.block}

                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    className={cls.block}

                />
            );
        default:
            return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        src={article?.img}
                        size={200}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <span className={cls.icon}>{t('EyeIcon')}</span>
                    <Text
                        title={String(article?.views)}
                    />
                </div>
                <div className={cls.articleInfo}>
                    <span className={cls.icon}>{t('CalendarIcon')}</span>
                    <Text
                        title={article?.createdAt}
                    />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};
