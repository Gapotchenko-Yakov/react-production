import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList comments={[
                {
                    id: '1',
                    text: 'some comment',
                    articleId: '1',
                    user: {
                        id: '1',
                        username: 'admin',
                        // eslint-disable-next-line max-len
                        avatar: 'https://pic.rutubelist.ru/user/b1/6e/b16e8e86585f1ceb8d8c622266ef2648.jpg',
                    },
                },
                {
                    id: '2',
                    text: 'some comment 2',
                    articleId: '1',
                    user: {
                        id: '1',
                        username: 'admin',
                        // eslint-disable-next-line max-len
                        avatar: 'https://pic.rutubelist.ru/user/b1/6e/b16e8e86585f1ceb8d8c622266ef2648.jpg',
                    },
                },
                {
                    id: '3',
                    text: 'some comment 3',
                    articleId: '1',
                    user: {
                        id: '1',
                        username: 'admin',
                        // eslint-disable-next-line max-len
                        avatar: 'https://pic.rutubelist.ru/user/b1/6e/b16e8e86585f1ceb8d8c622266ef2648.jpg',
                    },
                },
            ]}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
