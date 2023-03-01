import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {redirect} from 'react-router-dom';
import {EEndPoints} from '../config/endpoints';
import {TBooksByIdType, TBooksGenresType, TBooksType} from './book-service-types';



export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: EEndPoints.baseUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('authorization', `Bearer ${JSON.parse(token)}`)
            }
            return headers
        }
    }),
    keepUnusedDataFor: 0,
    endpoints: (builder) => ({
        gettingAListOfBooks: builder.query<TBooksType[], void>({
            query: () => EEndPoints.gettingAListOfBooks,
        }),
        gettingABookById: builder.query<TBooksByIdType, number>({
            query: (id) => `${EEndPoints.gettingABookById}/${id}`
        }),
        gettingAListOfBookGenres: builder.query<TBooksGenresType[], void>({
            query: () => EEndPoints.gettingAListOfBookGenres,
        }),
    }),
})

export const {useGettingAListOfBooksQuery, useGettingABookByIdQuery, useGettingAListOfBookGenresQuery} = bookApi;

export const useGettingAListOfBookGenresQueryState = bookApi.endpoints.gettingAListOfBookGenres.useQueryState;
export const useGettingAListOfBooksQueryState = bookApi.endpoints.gettingAListOfBooks.useQueryState;
export const useGettingAListOfBooksByIdQueryState = bookApi.endpoints.gettingABookById.useQueryState;
