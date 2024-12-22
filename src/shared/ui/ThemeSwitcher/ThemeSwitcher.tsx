import { FC } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width="40px" height="40px" />
      ) : (
        <LightIcon width="40px" height="40px" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
