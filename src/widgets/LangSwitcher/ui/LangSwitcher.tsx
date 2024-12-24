import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ButtonColor } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            color={ButtonColor.PRIMARY}
            onClick={toggleLang}
        >
            {t('Language')}
        </Button>
    );
};

export default LangSwitcher;
