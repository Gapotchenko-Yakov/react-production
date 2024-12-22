import { FC } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "shared/lib";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
