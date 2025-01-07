import {
    fetchProfileData,
    profileReducer,
    ProfileCard,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {}

const reducersList: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducersList}
            removeAfterUnmount
        >
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
