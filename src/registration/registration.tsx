import React, {useState} from 'react';

import {SerializedError} from '@reduxjs/toolkit';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError, FetchBaseQueryMeta,
    MutationDefinition
} from '@reduxjs/toolkit/query';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {Navigate} from 'react-router-dom';
import {
    AllForm,
    HeaderLogin,
} from '../authorization/styles';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {
    FormRegistrationAllContainer,
    RegistrationContainer
} from './styles';
import {StepOne} from './step-one';
import {StepTwo} from './step-two';
import {StepThree} from './step-three';
import {useAppSelector} from '../store/store';
import {TUseStateType} from './registration-container';
import {
    TAuthorizationResponse,
    TRegistrationRequest
} from '../services/login-service-types';

type TFormComponentTypes = {
    error: FetchBaseQueryError | SerializedError | undefined
    registration: MutationTrigger<MutationDefinition<TRegistrationRequest, BaseQueryFn<string | FetchArgs, unknown,
        FetchBaseQueryError, { shout?: boolean }, FetchBaseQueryMeta>, never, TAuthorizationResponse, 'userApi'>>
    isError: boolean
    setIsSuccessMessage?: (value: boolean) => void
    setIsUnSuccessMessage?: (value: boolean) => void
    setIsUnSuccessMessageSameLogin?: (value: boolean) => void
    state: { email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null }
    setState?: (value: TUseStateType) => void
}

export const RegistrationForm: React.FC<TFormComponentTypes> = ({
    error,
    registration,
    isError,
    setIsSuccessMessage,
    setIsUnSuccessMessage,
    setIsUnSuccessMessageSameLogin,
    state, setState
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isAuth = useAppSelector((rootState) => rootState.userSlice.isAuth);
    const [stepRegistration, setStepRegistration] = useState<number>(1);

    if (isAuth) {
        return <Navigate to="/"/>;
    }

    return (
        <AllForm data-test-id='auth'>
            <RegistrationContainer>
                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <FormRegistrationAllContainer>
                    {
                        stepRegistration === 1
                            ?
                            <StepOne
                                setStepRegistration={setStepRegistration}
                                stepRegistration={stepRegistration}
                                setState={setState}
                                registration={registration}
                                state={state}/>
                            : stepRegistration === 2
                                ?
                                <StepTwo
                                    setStepRegistration={setStepRegistration}
                                    stepRegistration={stepRegistration}
                                    setState={setState}
                                    state={state}/>
                                :
                                <StepThree
                                    stepRegistration={stepRegistration}
                                    error={error}
                                    setState={setState}
                                    isError={isError}
                                    registration={registration}
                                    state={state}
                                    setIsSuccessMessage={setIsSuccessMessage}
                                    setIsUnSuccessMessage={setIsUnSuccessMessage}
                                    setIsUnSuccessMessageSameLogin={setIsUnSuccessMessageSameLogin}
                                />
                    }
                </FormRegistrationAllContainer>
            </RegistrationContainer>
        </AllForm>
    );
};
