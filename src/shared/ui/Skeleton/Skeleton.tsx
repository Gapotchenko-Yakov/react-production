import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        borderRadius,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        height,
        width,
        borderRadius,
    }), [height, width, borderRadius]);

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
};
