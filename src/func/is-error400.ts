import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

export const IsError400 = (error: FetchBaseQueryError | SerializedError) => {
    if ('status' in error) {
        return error.status === 400;
    }
    return false
};

