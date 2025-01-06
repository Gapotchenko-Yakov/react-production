import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const baseUrl = 'http://localhost:8000';

export const $api = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
