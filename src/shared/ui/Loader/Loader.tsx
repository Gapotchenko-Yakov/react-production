import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => (
  <div className={classNames(cls.Loader, {}, [className])}>
    <div className={cls['lds-hourglass']} />
  </div>
);

export default Loader;
