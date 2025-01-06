import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    ThunkConfig,
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    StateSchemaKey,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
