import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
    name: keyof StateSchema;
reducer: Reducer;
removeAfterUnmount: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        name,
        reducer,
        removeAfterUnmount,
        children,
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        store.reducerManager.add(name, reducer);
        dispatch({ type: '@INIT loginForm reducer' });

        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove('loginForm');
                dispatch({ type: 'DESTROY loginForm reducer' });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};

export default DynamicModuleLoader;
