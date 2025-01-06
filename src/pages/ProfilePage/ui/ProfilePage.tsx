import { useTranslation } from 'react-i18next';

interface ProfilePageProps {}

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <div>
            {t('PROFILE PAGE')}
        </div>
    );
};

export default ProfilePage;
