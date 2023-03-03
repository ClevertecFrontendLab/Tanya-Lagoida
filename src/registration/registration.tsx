import React, {useState} from 'react';

import {Navigate} from 'react-router-dom';
import {
    AllForm,
    HeaderLogin,
} from '../authorization/styles';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {LoginFailed} from '../authorization/login-failed';
import {
    FormRegistrationAllContainer,
    RegistrationContainer,
    TitleForm
} from './styles';
import {StepOne} from './step-one';
import {StepTwo} from './step-two';
import {StepThree} from './step-three';

type TFormComponentTypes = {
    error: any
    // error: FetchBaseQueryError | SerializedError | undefined
    registration: any
}

export const RegistrationForm: React.FC<TFormComponentTypes> = ({error, registration}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const [stepRegistration, setStepRegistration] = useState<number>(1);

    if (error && error.status !== 400) {
        return <LoginFailed/>;
    }

    const user = localStorage.getItem('user');
    if (user) {
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
                                setStepRegistration={setStepRegistration}/>
                            : stepRegistration === 2
                                ?
                                <StepTwo
                                    setStepRegistration={setStepRegistration}/>
                                :
                                <StepThree
                                    error={error}
                                    registration={registration}/>
                    }
                </FormRegistrationAllContainer>
            </RegistrationContainer>
        </AllForm>
    );
};
