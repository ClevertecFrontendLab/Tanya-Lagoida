import React, {useState} from 'react';
import {useRegistrationMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {RegistrationForm} from './registration';
import {
    RegistrationUnsuccessfulMessageSameLogin
} from './registration-unsuccessful-message-same-login';
import {RegistrationUnsuccessfulMessage} from './registration-unsuccessful-message';
import {RegistrationSuccessfulMessage} from './registration-successful-message';

export const RegistrationContainer = () => {
    const [registration, {isLoading, isError, error}] = useRegistrationMutation();
    const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
    const [isUnSuccessMessage, setIsUnSuccessMessage] = useState<boolean>(false);
    const [isUnSuccessMessageSameLogin, setIsUnSuccessMessageSameLogin] = useState<boolean>(false);

    if (isUnSuccessMessageSameLogin) {
        return <RegistrationUnsuccessfulMessageSameLogin/>;
    }
    if (isUnSuccessMessage) {
        return <RegistrationUnsuccessfulMessage/>;
    }
    if (isSuccessMessage) {
        return <RegistrationSuccessfulMessage/>;
    }
    if (isLoading) {
        return <>
            <Loader />
            <RegistrationForm registration={registration} error={error} isError={isError}/>
        </>
    }

    return (
        <RegistrationForm
            setIsSuccessMessage={setIsSuccessMessage}
            setIsUnSuccessMessage={setIsUnSuccessMessage}
            setIsUnSuccessMessageSameLogin={setIsUnSuccessMessageSameLogin}
            registration={registration}
            error={error}
            isError={isError}/>
    );
};
