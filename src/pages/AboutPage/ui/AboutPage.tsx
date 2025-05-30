import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

interface AboutPageProps { }

const AboutPage = (props: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <Page data-testid="AboutPage">
            {t('О сайте')}
        </Page>
    );
};

export default AboutPage;
