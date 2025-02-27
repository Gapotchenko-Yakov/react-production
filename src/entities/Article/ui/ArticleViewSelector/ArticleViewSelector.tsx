import { memo } from 'react';
import ListIcon from 'shared/assets/icons/outline/bars-3.svg';
import TiledIcon from 'shared/assets/icons/outline/squares-2x2.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        onViewClick,
    } = props;

    const viewTypes = [
        {
            view: ArticleView.SMALL,
            Icon: TiledIcon,
        },
        {
            view: ArticleView.BIG,
            Icon: ListIcon,
        },
    ];

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div
            className={classNames(cls.ArticleViewSelector, {}, [className])}
        >
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                // className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                >
                    <Icon
                        Svg={viewType.Icon}
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}

                    />
                </Button>
            ))}
        </div>
    );
});
