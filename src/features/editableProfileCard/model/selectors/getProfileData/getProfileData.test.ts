import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';
import { Profile } from '../../types/editableProfileCardSchema';

describe('getProfileData.test', () => {
    test('should return error', () => {
        const data: Profile = {
            first: 'Иван',
            lastname: 'Петров',
            age: 27,
            currency: Currency.USD,
            country: Country.Belarus,
            city: 'Moscow',
            username: 'admin12',
            avatar: 'https://pic.rutubelist.ru/user/b1/6e/b16e8e86585f1ceb8d8c622266ef2648.jpg',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
