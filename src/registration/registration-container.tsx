import React from 'react';
import {useRegistrationMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {RegistrationForm} from './registration';
import {
    RegistrationSuccessfulMessage
} from './registration-successful-message';
import {
    RegistrationUnsuccessfulMessageSameLogin
} from './registration-unsuccessful-message-same-login';

export const RegistrationContainer = () => {
    const [registration, {isLoading, isError, error}] = useRegistrationMutation();

    if (isLoading) {
        return <>
            <Loader />
            <RegistrationForm registration={registration} error={error} isError={isError}/>
        </>
    }

    return (
        <RegistrationForm registration={registration} error={error} isError={isError}/>
    );
};
