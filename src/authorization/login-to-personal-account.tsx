import React from 'react';
import {useAuthorizationMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {FormAuthorizationComponent} from './form-authorization-component';

export const LoginToPersonalAccount = () => {
    const [authorization, {isLoading, isError, error}] = useAuthorizationMutation();


    if (isLoading) {
        return <>
             <Loader />
            <FormAuthorizationComponent authorization={authorization} error={error}/>
        </>
    }

    return (
        <FormAuthorizationComponent authorization={authorization} error={error}/>
    );
};
