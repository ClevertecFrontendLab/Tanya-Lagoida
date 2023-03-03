import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {EEndPoints} from '../config/endpoints';
import {
    TAuthorizationRequest,
    TAuthorizationResponse,
    TRegistrationRequest
} from './login-service-types';
import {RootState} from '../store/store';


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: EEndPoints.baseUrl
    }),
    endpoints: (builder) => ({
        authorization: builder.mutation<TAuthorizationResponse, TAuthorizationRequest>({
            query: (body) => ({
                url: EEndPoints.authorization,
                method: 'POST',
                body,
            }),
        }),
        registration: builder.mutation<TAuthorizationResponse, TRegistrationRequest>({
            query: (body) => ({
                url: EEndPoints.registration,
                method: 'POST',
                body,
            }),
        }),
        passwordReset: builder.mutation({
            query: (id) => `${EEndPoints.passwordReset}/${id}`
        }),
        passwordRecovery: builder.mutation({
            query: (id) => `${EEndPoints.passwordRecovery}/${id}`
        }),
    }),
});

export const {
    useAuthorizationMutation,
    useRegistrationMutation,
    usePasswordResetMutation,
    usePasswordRecoveryMutation
} = userApi;

// export const useGettingAListOfBookGenresQueryState = bookApi.endpoints.gettingAListOfBookGenres.useQueryState;
// export const useGettingAListOfBooksQueryState = bookApi.endpoints.gettingAListOfBooks.useQueryState;
// export const useGettingAListOfBooksByIdQueryState = bookApi.endpoints.gettingABookById.useQueryState;
