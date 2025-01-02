import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {}

const AboutPage = (props: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('About')}
            <Counter />
        </div>
    );
};

export default AboutPage;
