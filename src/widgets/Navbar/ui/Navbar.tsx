import { classNames } from 'shared/lib';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.mainLink}
                    theme={AppLinkTheme.PRIMARY}
                >
                    {t('Main')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
