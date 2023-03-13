import React, {useState} from 'react';

import {Loader} from '../loader/loader';
import {useRegistrationMutation} from '../services/login-service';

import {RegistrationForm} from './registration';
import {RegistrationSuccessfulMessage} from './registration-successful-message';
import {RegistrationUnsuccessfulMessage} from './registration-unsuccessful-message';
import {
    RegistrationUnsuccessfulMessageSameLogin
} from './registration-unsuccessful-message-same-login';

export type TUseStateType = {
    email: string | null
    username: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
}

export const RegistrationContainer = () => {
    const [registration, {isLoading, isError, error}] = useRegistrationMutation();
    const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
    const [isUnSuccessMessage, setIsUnSuccessMessage] = useState<boolean>(false);
    const [isUnSuccessMessageSameLogin, setIsUnSuccessMessageSameLogin] = useState<boolean>(false);
    const [state, setState] = useState<TUseStateType>({email: null, username: null, password: null, firstName: null, lastName: null, phone: null});

    if (isUnSuccessMessageSameLogin) {
        return <RegistrationUnsuccessfulMessageSameLogin/>;
    }
    if (isUnSuccessMessage) {
        return <RegistrationUnsuccessfulMessage
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
        return <React.Fragment>
            <Loader />
            <RegistrationForm
                state={state}
                registration={registration}
                error={error}
                isError={isError}
            />
        </React.Fragment>
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
            isError={isError}
        />
    );
};
