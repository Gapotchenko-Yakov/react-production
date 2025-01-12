import { SVGProps, VFC } from 'react';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/solid/information-circle.svg';
import MainIcon from 'shared/assets/icons/solid/home.svg';
import ProfileIcon from 'shared/assets/icons/solid/user-circle.svg';
import ArticleIcon from 'shared/assets/icons/outline/document-text.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItems: SidebarItemType[] = [
    {
        path: routePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: routePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: routePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: routePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
    },
];
