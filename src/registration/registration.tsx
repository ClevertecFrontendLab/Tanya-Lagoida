import React, {useState} from 'react';

import {Navigate} from 'react-router-dom';
import {
    AllForm,
    HeaderLogin,
} from '../authorization/styles';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {
    ErrorsContainer
} from '../authorization/errors-container';
import {
    FormRegistrationAllContainer,
    RegistrationContainer,
    TitleForm
} from './styles';
import {StepOne} from './step-one';
import {StepTwo} from './step-two';
import {StepThree} from './step-three';
import {TRegistrationRequest} from '../services/login-service-types';
import {
    RegistrationUnsuccessfulMessageSameLogin
} from './registration-unsuccessful-message-same-login';
import {RegistrationSuccessfulMessage} from './registration-successful-message';
import {useAppSelector} from '../store/store';

type TFormComponentTypes = {
    error: any
    // error: FetchBaseQueryError | SerializedError | undefined
    registration: any
    isError: any
}

export const RegistrationForm: React.FC<TFormComponentTypes> = ({error, registration, isError}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isAuth = useAppSelector((state) => state.userSlice.isAuth);

    const [stepRegistration, setStepRegistration] = useState<number>(1);
    const [state, setState] = useState<
        {email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null}>
    ({email: null, username: null, password: null, firstName: null, lastName: null, phone: null});

    if (isAuth) {
        return <Navigate to="/"/>;
    }

    return (
        <AllForm>
            <RegistrationContainer>
                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <FormRegistrationAllContainer>
                    <TitleForm>
                        <LabelText
                            variantText="large24">Регистрация
                        </LabelText>
                        <LabelText
                            variantText="medium14Bold">{stepRegistration} шаг из 3
                        </LabelText>
                    </TitleForm>
                    {
                        stepRegistration === 1
                            ?
                            <StepOne
                                setStepRegistration={setStepRegistration} setState={setState} state={state}/>
                            : stepRegistration === 2
                                ?
                                <StepTwo
                                    setStepRegistration={setStepRegistration} setState={setState} state={state}/>
                                :
                                <StepThree
                                    error={error}
                                    isError={isError}
                                    registration={registration}
                                    state={state}
                                />
                    }
                </FormRegistrationAllContainer>
            </RegistrationContainer>
        </AllForm>
    );
};
