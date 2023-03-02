import React from 'react';
import {useAuthorizationMutation, useRegistrationMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {RegistrationForm} from './registration';

export const RegistrationContainer = () => {
    const [registration, {isLoading, isError, error}] = useRegistrationMutation();


    if (isLoading) {
        return <>
            <Loader />
            <RegistrationForm registration={registration} error={error}/>
        </>
    }

    return (
        <RegistrationForm registration={registration} error={error}/>
    );
};
