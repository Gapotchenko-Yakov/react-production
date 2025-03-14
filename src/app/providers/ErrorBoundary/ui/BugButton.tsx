import {
    FC, ReactNode, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}

const BugButton = ({ className }: BugButtonProps) => {
    const [hasError, setHasError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setHasError(true);
    };

    useEffect(() => {
        if (hasError) {
            throw new Error();
        }
    }, [hasError]);

    return (
        <Button
            onClick={onThrow}
            className={classNames('', {}, [className])}
        >
            {t('throw error')}
        </Button>
    );
};

export default BugButton;
