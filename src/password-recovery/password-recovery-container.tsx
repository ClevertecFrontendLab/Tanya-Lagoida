import React from 'react';

import {usePasswordRecoveryMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {PasswordRecovery} from './password-recovery';

export const PasswordRecoveryContainer = () => {
    const [passwordRecovery, {isLoading, isError, error, data}] = usePasswordRecoveryMutation();

    if (isLoading) {
        return <>
            <Loader />
            <PasswordRecovery/>
        </>
    }

    return (
        <PasswordRecovery error={error} passwordRecovery={passwordRecovery} data={data}/>
    );
};
