import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import InfoIcon from 'shared/assets/icons/solid/information-circle.svg';
import HomeIcon from 'shared/assets/icons/solid/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid="sidebar"
        >
            <Button
                data-testid="toggle"
                onClick={onToggle}
                className={classNames(cls.collapseBtn)}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}

            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    to={routePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}

                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to={routePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <InfoIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
