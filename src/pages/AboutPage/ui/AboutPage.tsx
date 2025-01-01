import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {}

const AboutPage = (props: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('About')}
        </div>
    );
};

export default AboutPage;
