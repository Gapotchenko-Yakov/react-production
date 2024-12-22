import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib";

export enum ButtonTheme {
  CLEAR = "clear",
}

export enum ButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  color?: ButtonColor;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    color = ButtonColor.PRIMARY,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [
        className,
        cls[theme],
        cls[color],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
