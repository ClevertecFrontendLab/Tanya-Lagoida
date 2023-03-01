import {createSlice} from '@reduxjs/toolkit';
import {TUserType} from '../services/login-service-types';

type AuthState = {
    user: TUserType | null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {user: null} as AuthState,
    reducers: {
        userReceived(state, action) {
            return {
                ...state,
                user: action.payload
            };
        },
    },
});
export const {userReceived} = userSlice.actions;
