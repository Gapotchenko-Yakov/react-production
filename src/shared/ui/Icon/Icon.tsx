import { SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

export enum IconSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
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
