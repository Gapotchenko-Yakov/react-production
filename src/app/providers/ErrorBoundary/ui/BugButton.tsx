import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

const BugButton: FC<BugButtonProps> = ({ className }) => {
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
            {t('Throw an Error')}
        </Button>
    );
};

export default BugButton;
