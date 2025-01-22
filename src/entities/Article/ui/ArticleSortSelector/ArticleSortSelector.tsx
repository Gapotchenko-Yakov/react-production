import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder : (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                label={t('Сортировать ПО')}
                value={sort}
                onChange={onChangeSort}
                options={sortOptions}
            />
            <Select
                label={t('по')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
});
