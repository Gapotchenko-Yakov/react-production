import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(routePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${routePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.OUTLINED} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINED}
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
});
