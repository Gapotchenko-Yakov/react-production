import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

interface AboutPageProps {}

const AboutPage = (props: AboutPageProps) => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('О сайте')}
        </Page>
    );
};

export default AboutPage;
