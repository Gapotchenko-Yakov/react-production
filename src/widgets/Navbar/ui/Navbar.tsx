import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTheme } from "app/providers/ThemeProvider";
import { ThemeSwitcher } from "shared/ui";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.PRIMARY}>
          Главная
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
