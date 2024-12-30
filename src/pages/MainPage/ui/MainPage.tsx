import { useTranslation } from 'react-i18next';

interface MainPageProps {
}

const MainPage = (props: MainPageProps) => {
    const { t } = useTranslation('main');

    return <div>{t('Main')}</div>;
};

export default MainPage;
