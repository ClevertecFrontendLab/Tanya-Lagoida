import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {RootState} from './store';
import {TAuthorizationResponse} from '../services/login-service-types';

type AuthState = {
    user: TAuthorizationResponse | null
    token: string | null
}

const slice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null } as AuthState,
    reducers: {
        setCredentials: (
            state,
            { payload: { user, token } }: PayloadAction<{ user: TAuthorizationResponse; token: string }>
        ) => {
            state.user = user
            state.token = token
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
