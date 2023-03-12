import React, {useState} from 'react';

import {usePasswordResetMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {PasswordReset} from './password-reset';
import {MessageContainer} from '../authorization/message-container';

export const PasswordResetContainer = () => {
    const [passwordReset, {isLoading, error}] = usePasswordResetMutation();
    const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);

    if (isLoading) {
        return <React.Fragment>
            <Loader />
            <PasswordReset
                passwordReset={passwordReset}
            />
        </React.Fragment>
    }
    if (isSuccessMessage) {
        return <MessageContainer />
    }

    return (
        <PasswordReset
            error={error}
            passwordReset={passwordReset}
            setIsSuccessMessage={setIsSuccessMessage}
        />
    );
};
