import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface MainPageProps { }

const MainPage = (props: MainPageProps) => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
