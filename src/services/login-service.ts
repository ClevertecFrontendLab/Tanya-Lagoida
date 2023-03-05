import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {EEndPoints} from '../config/endpoints';
import {
    TAuthorizationRequest,
    TAuthorizationResponse, TPasswordRecoveryRequest, TPasswordResetRequest, TPasswordResetResponse,
    TRegistrationRequest
} from './login-service-types';


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
        passwordReset: builder.mutation<TPasswordResetResponse, TPasswordResetRequest>({
            query: (body) => ({
                url: EEndPoints.passwordReset,
                method: 'POST',
                body,
            }),
        }),
        passwordRecovery: builder.mutation<TAuthorizationResponse, TPasswordRecoveryRequest>({
            query: (body) => ({
                    url: EEndPoints.passwordRecovery,
                    method: 'POST',
                    body,
                }
            )
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
