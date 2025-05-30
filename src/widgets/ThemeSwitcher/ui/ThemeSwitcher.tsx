import { memo, useCallback } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { saveJsonSettings } from '@/entities/User';
import DarkIcon from '@/shared/assets/icons/outline/moon.svg';
import LightIcon from '@/shared/assets/icons/outline/sun.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon, IconSize } from '@/shared/ui/Icon/Icon';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme: Theme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            onClick={onToggleHandler}
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? (
                <Icon Svg={DarkIcon} size={IconSize.XL} />
            ) : (
                <Icon Svg={LightIcon} size={IconSize.XL} />
            )}
        </Button>
    );
});

export default ThemeSwitcher;
