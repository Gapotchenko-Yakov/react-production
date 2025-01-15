import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';
import { Profile } from '../../types/profile';

const profileValue: Profile = {
    first: 'Иван',
    lastname: 'Петров',
    age: 27,
    currency: Currency.USD,
    country: Country.Belarus,
    city: 'Moscow',
    username: 'admin12',
    avatar: 'https://pic.rutubelist.ru/user/b1/6e/b16e8e86585f1ceb8d8c622266ef2648.jpg',
};

describe('fetchProfileData', () => {
    test('fulfilled', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileValue }));

        const result = await thunk.callThunk('1');

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileValue);
    });

    test('rejected', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
