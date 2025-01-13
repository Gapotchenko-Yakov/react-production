import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/outline/document-duplicate.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { useCallback } from 'react';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = (props: CodeProps) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
