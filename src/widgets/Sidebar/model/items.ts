import { SVGProps, VFC } from 'react';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import InfoIcon from 'shared/assets/icons/solid/information-circle.svg';
import HomeIcon from 'shared/assets/icons/solid/home.svg';
import UserIcon from 'shared/assets/icons/solid/user-circle.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItems: SidebarItemType[] = [
    {
        path: routePath.main,
        text: 'Главная',
        Icon: HomeIcon,
    },
    {
        path: routePath.about,
        text: 'О сайте',
        Icon: InfoIcon,
    },
    {
        path: routePath.profile,
        text: 'Профиль',
        Icon: UserIcon,
        authOnly: true,
    },
];
