import { SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IconProps {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>>
    size?: IconSize;
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        size = IconSize.M,
    } = props;

    return (
        <Svg className={classNames(cls.Icon, {}, [className, cls[size]])} />
    );
};
