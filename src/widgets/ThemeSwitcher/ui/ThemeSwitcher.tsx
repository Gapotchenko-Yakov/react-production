import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/outline/moon.svg';
import LightIcon from 'shared/assets/icons/outline/sun.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? (
                <DarkIcon width="40px" height="40px" />
            ) : (
                <LightIcon width="40px" height="40px" />
            )}
        </Button>
    );
});

export default ThemeSwitcher;
