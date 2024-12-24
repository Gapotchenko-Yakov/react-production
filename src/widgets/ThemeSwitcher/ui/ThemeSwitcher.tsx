import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui';
import { ButtonColor } from '../../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            color={ButtonColor.SECONDARY}
        >
            {theme === Theme.DARK ? (
                <DarkIcon width="40px" height="40px" />
            ) : (
                <LightIcon width="40px" height="40px" />
            )}
        </Button>
    );
};

export default ThemeSwitcher;