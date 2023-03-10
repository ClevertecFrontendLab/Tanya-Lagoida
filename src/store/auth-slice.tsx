import {createSlice} from '@reduxjs/toolkit';
import {TUserType} from '../services/login-service-types';

type AuthState = {
    user: TUserType | null,
    isAuth: boolean
}
const token = localStorage.getItem('token');
export const userSlice = createSlice({

    name: 'user',
    initialState: {
        user: null,
        isAuth: !!token,
    } as AuthState,
    reducers: {
        userReceived(state, action) {
            state.user = action.payload.user;
            state.isAuth = action.payload.isAuth
        },
    },
});
export const {userReceived} = userSlice.actions;
