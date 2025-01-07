export {
    Profile,
    ProfileSchema,
} from './model/types/profile';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';
