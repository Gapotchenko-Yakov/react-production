import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { ArticleType } from 'entities/Article/model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (newType: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;

    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Айти'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
    ], [t]);

    const onTabClick = useCallback((tabItem: TabItem) => {
        onChangeType(tabItem.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            value={value}
            onTabClick={onTabClick}
            tabItems={typeTabs}
            className={classNames('', {}, [className])}

        />

    );
});
