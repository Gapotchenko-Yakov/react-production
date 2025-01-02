import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface MainPageProps {}

const MainPage = (props: MainPageProps) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Main')}
        </div>
    );
};

export default MainPage;
