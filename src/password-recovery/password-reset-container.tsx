import React from 'react';

import {usePasswordResetMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {PasswordReset} from './password-reset';

export const PasswordResetContainer = () => {
    const [passwordReset, {isLoading, isError, error, data}] = usePasswordResetMutation();

    if (isLoading) {
        return <>
            <Loader />
            <PasswordReset/>
        </>
    }

    return (
        <PasswordReset error={error} passwordReset={passwordReset} data={data}/>
    );
};
