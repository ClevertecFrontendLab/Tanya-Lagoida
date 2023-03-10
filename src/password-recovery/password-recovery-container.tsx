import React, {useState} from 'react';

import {usePasswordRecoveryMutation} from '../services/login-service';
import {Loader} from '../loader/loader';
import {PasswordRecovery} from './password-recovery';
import {PasswordRecoverySuccessMessage} from './password-recovery-success-message';
import {PasswordRecoveryUnSuccessMessage} from './password-recovery-unsuccess-message';

type TPropsType = {
    code: string
}

export const PasswordRecoveryContainer: React.FC<TPropsType> = ({code}) => {
    const [passwordRecovery, {isLoading, isError, error, data}] = usePasswordRecoveryMutation();
    const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
    const [isUnSuccessMessage, setIsUnSuccessMessage] = useState<boolean>(false);


    if (isSuccessMessage) {
        return <PasswordRecoverySuccessMessage/>;
    }
    if (isUnSuccessMessage) {
        return <PasswordRecoveryUnSuccessMessage code={code}/>;
    }
    if (isLoading) {
        return <>
            <Loader/>
            <PasswordRecovery/>
        </>;
    }

    return (
        <PasswordRecovery
            error={error}
            passwordRecovery={passwordRecovery}
            data={data}
            setIsUnSuccessMessage={setIsUnSuccessMessage}
            isUnSuccessMessage={isUnSuccessMessage}
            setIsSuccessMessage={setIsSuccessMessage}
            isSuccessMessage={isSuccessMessage}
        />
    );
};
