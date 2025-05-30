import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const getJsonSettings = (state: StateSchema) => state.user?.authData?.jsonSettings ?? defaultJsonSettings;

export const useJsonSettings = () => {
    const jsonSettings = useSelector(getJsonSettings);

    return jsonSettings;
};

// type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
// type Hook<T, Args extends any[]> = (...args: Args) => T;
// type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

// export function buildSelector<T, Args extends any[]>(
//     selector: Selector<T, Args>,
// ): Result<T, Args> {
//     const useSelectorHook: Hook<T, Args> = (...args: Args) => {
//         return useSelector((state: StateSchema) => selector(state, ...args));
//     };

//     return [useSelectorHook, selector];
// }

// const defaultJsonSettings: JsonSettings = {};

// export const [useJsonSettings, getJsonSettings] = buildSelector(
//     (state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
// );
