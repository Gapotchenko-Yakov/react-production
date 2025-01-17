import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import EyeIcon from 'shared/assets/icons/outline/eye.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(routePath.article_details + article.id);
    }, [navigate, article.id]);

    const views = (
        <>
            <Text className={cls.views} text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const types = <Text className={cls.types} text={article.type.join(', ')} />;

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <div className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img className={cls.img} alt={article.title} src={article.img} />
                    {
                        textBlock
                    && (
                        <ArticleTextBlockComponent
                            className={cls.textBlock}
                            block={textBlock}
                        />
                    )
                    }

                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINED}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <Text className={cls.date} text={article.createdAt} />
                    <img className={cls.img} alt={article.title} src={article.img} />

                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </div>
        </div>
    );
});
