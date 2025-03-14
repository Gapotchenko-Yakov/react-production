import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { Profile } from '../../types/editableProfileCardSchema';
import { ValidateProfileError } from '../../consts/consts';

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

describe('validateProfileData', () => {
    test('success', () => {
        expect(validateProfileData(data)).toEqual([]);
    });

    test('incorrect first and last name', () => {
        expect(validateProfileData({
            ...data,
            first: '',
            lastname: '',
        })).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect first and last name', () => {
        expect(validateProfileData({
            ...data,
            age: undefined,
        })).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect first and last name', () => {
        expect(validateProfileData({
            ...data,
            country: undefined,
        })).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', () => {
        expect(validateProfileData({})).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
