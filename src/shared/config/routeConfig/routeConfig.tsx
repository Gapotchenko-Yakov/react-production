import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: { path: routePath.main, element: <MainPage /> },
    [AppRoutes.ABOUT]: { path: routePath.about, element: <AboutPage /> },
    [AppRoutes.PROFILE]: { path: routePath.profile, element: <ProfilePage /> },
    [AppRoutes.NOT_FOUND]:
    { path: routePath.not_found, element: <NotFoundPage /> },
};
