import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import {bookApi} from '../services/book-service';
import {userApi} from '../services/login-service';

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware).concat(userApi.middleware),
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
