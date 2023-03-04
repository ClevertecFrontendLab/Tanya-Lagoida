import React from 'react';

import {useRegistrationMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {PasswordReset} from './password-reset';

export const PasswordResetContainer = () => {
    const [registration, {isLoading, isError, error}] = useRegistrationMutation();

    if (isLoading) {
        return <>
            <Loader />
            <PasswordReset registration={registration} error={error}/>
        </>
    }

    return (
        <PasswordReset error={error} registration={registration} />
    );
};
