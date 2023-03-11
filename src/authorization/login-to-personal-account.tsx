import React from 'react';
import {useAuthorizationMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {FormAuthorizationComponent} from './form-authorization-component';

export const LoginToPersonalAccount = () => {
    const [authorization, {isLoading, error}] = useAuthorizationMutation();


    // if (isLoading) {
    //     return <>
    //          <Loader />
    //         <FormAuthorizationComponent  authorization={authorization} error={error}/>
    //     </>
    // }

    return (
        <>
            {isLoading ? <Loader /> : null}
            <FormAuthorizationComponent authorization={authorization} error={error}/>
        </>
    );
};
