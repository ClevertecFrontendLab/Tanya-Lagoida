import React from 'react';

import {Loader} from '../loader/loader';
import {useAuthorizationMutation} from '../services/login-service';

import {FormAuthorizationComponent} from './form-authorization-component';

export const LoginToPersonalAccount = () => {
    const [authorization, {isLoading, error}] = useAuthorizationMutation();

    return (
        <React.Fragment>
            {isLoading ? <Loader /> : null}
            <FormAuthorizationComponent authorization={authorization} error={error}/>
        </React.Fragment>
    );
};
