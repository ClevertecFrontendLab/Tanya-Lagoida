import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {bookApi} from '../services/book-service';
import {userApi} from '../services/login-service';
import {userSlice} from './auth-slice';

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        userSlice: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware).concat(userApi.middleware),
})
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>;
