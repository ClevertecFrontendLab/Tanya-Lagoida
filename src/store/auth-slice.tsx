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
            return {
                user: action.payload,
                isAuth: true
            };
        },
    },
});
export const {userReceived} = userSlice.actions;
