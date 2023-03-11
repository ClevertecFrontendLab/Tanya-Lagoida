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
    const [state, setState] = useState<
        { email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null }>
    ({email: null, username: null, password: null, firstName: null, lastName: null, phone: null});

    if (isUnSuccessMessageSameLogin) {
        return <RegistrationUnsuccessfulMessageSameLogin/>;
    }
    if (isUnSuccessMessage) {
        return <RegistrationUnsuccessfulMessage
            error={error}
            registration={registration}
            setIsSuccessMessage={setIsSuccessMessage}
            setIsUnSuccessMessage={setIsUnSuccessMessage}
            setIsUnSuccessMessageSameLogin={setIsUnSuccessMessageSameLogin}
            state={state}
        />;
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
            setState={setState}
            state={state}
            setIsSuccessMessage={setIsSuccessMessage}
            setIsUnSuccessMessage={setIsUnSuccessMessage}
            setIsUnSuccessMessageSameLogin={setIsUnSuccessMessageSameLogin}
            registration={registration}
            error={error}
            isError={isError}/>
    );
};
