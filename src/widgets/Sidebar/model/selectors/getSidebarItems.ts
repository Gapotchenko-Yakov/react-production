import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/solid/information-circle.svg';
import MainIcon from 'shared/assets/icons/solid/home.svg';
import ProfileIcon from 'shared/assets/icons/solid/user-circle.svg';
import ArticleIcon from 'shared/assets/icons/solid/document-text.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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

        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: routePath.profile + userData.id,
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
            );
        }

        return sidebarItemsList;
    },
);
