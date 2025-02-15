import { ChangeEvent, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;

}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = options?.map((opt) => (
        <option
            className={cls.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    ));

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }, [onChange]);

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {
                label && (
                    <span className={cls.label}>
                        {`${label}>`}
                    </span>
                )
            }
            <select
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
                className={cls.select}
            >
                {optionsList}
            </select>
        </div>
    );
};
