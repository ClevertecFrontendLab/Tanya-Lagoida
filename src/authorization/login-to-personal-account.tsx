import React from 'react';
import {useAuthorizationMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {FormComponent} from './form-component';

export const LoginToPersonalAccount = () => {
    const [authorization, {isLoading, isError, error}] = useAuthorizationMutation();


    if (isLoading) {
        return <>
             <Loader />
            <FormComponent authorization={authorization} error={error}/>
        </>
    }

    return (
        <FormComponent authorization={authorization} error={error}/>
    );
};
