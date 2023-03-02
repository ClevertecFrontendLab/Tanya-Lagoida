import React, {useState} from 'react';
import {
    AllForm,
    AssistiveText, AssistiveTextBox, AssistiveTextBoxStepOne,
    AssistiveTextError, BottomFrame,
    ButtonAndBottomFrame,
    FormAllContainer,
    FormContainer,
    HeaderLogin,
    InputStyles,
    LabelBox,
    LoginContainer, Registration,
    TextFields
} from '../authorization/styles';
import {LabelText} from '../pages/labels/labels';
import eyeClosed from '../pages/images/eye-closed.svg';
import eye from '../pages/images/Eye.svg';
import {ButtonComponent} from '../pages/components/button/button-component';
import {Navigate, NavLink} from 'react-router-dom';
import arrow from '../pages/images/arrow.svg';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {SubmitHandler, useForm} from 'react-hook-form';
import {TAuthorizationRequest, TAuthorizationResponse} from '../services/login-service-types';
import {useAppDispatch} from '../store/store';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError, FetchBaseQueryMeta,
    MutationDefinition
} from '@reduxjs/toolkit/query';
import {userReceived} from '../store/auth-slice';
import {LoginFailed} from '../authorization/login-failed';
import {
    ButtonAndBottomFrameRegistration,
    FormRegistrationAllContainer,
    RegistrationContainer,
    TitleForm
} from './styles';

type TFormComponentTypes = {
    error: any
    // error: FetchBaseQueryError | SerializedError | undefined
    registration: any
}

export const RegistrationForm: React.FC<TFormComponentTypes> = ({error}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {register, handleSubmit} = useForm<TAuthorizationRequest>();
    const dispatch = useAppDispatch();
    const [passwordType, setPasswordType] = useState('password');

    const onSubmit: SubmitHandler<TAuthorizationRequest> = async (data) => {
        try {
            const response = await authorization(data).unwrap();
            localStorage.setItem('token', JSON.stringify(response.jwt));
            localStorage.setItem('user', JSON.stringify(response.user));
            dispatch(userReceived(response.user));
        } catch (error) {
            console.log(error);
        }
    };

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };

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
                            variantText="medium14Bold">1 шаг из 3
                        </LabelText>
                    </TitleForm>
                    <FormContainer
                        onSubmit={handleSubmit(onSubmit)}>
                        <TextFields>
                            <InputStyles {...register('identifier', {required: true})}
                                         error={error} placeholder="Логин"/>
                            <LabelBox htmlFor="identifier">Придумайте логин для входа</LabelBox>
                            <AssistiveTextBoxStepOne>
                                <AssistiveText>
                                    Используйте для логина <AssistiveTextError>
                                    латинский алфавит
                                </AssistiveTextError> и <AssistiveTextError>
                                         цифры
                                    </AssistiveTextError>
                                </AssistiveText>
                            </AssistiveTextBoxStepOne>

                        </TextFields>
                        <TextFields>
                            <InputStyles type={passwordType}
                                         id="password" {...register('password', {required: true})}
                                         error={error} placeholder="Пароль"/>
                            <LabelBox htmlFor="password">Пароль</LabelBox>
                            <img src={passwordType === 'password' ? eyeClosed : eye} alt=""
                                 onClick={togglePassword}/>

                            <AssistiveTextBoxStepOne>
                            <AssistiveText>
                                Пароль <AssistiveTextError>
                                не менее 8 символов
                            </AssistiveTextError>
                                , с <AssistiveTextError>
                                заглавной буквой
                            </AssistiveTextError> и <AssistiveTextError>
                                цифрой
                            </AssistiveTextError>
                            </AssistiveText>
                            </AssistiveTextBoxStepOne>
                        </TextFields>
                        <ButtonAndBottomFrameRegistration>
                            <ButtonComponent
                                type="submit"
                                height={isMobileView ? '40px' : '52px'}
                                width={isMobileView ? '255px' : '416px'}
                                status="inStock"><LabelText
                                variantText={isMobileView ? 'smallLS' : 'medium16LS'}>следующий
                                шаг</LabelText>
                            </ButtonComponent>
                            <BottomFrame>
                                <LabelText
                                    variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Есть
                                    учётная запись?</LabelText>
                                <NavLink to="/registration">
                                    <Registration>
                                        <LabelText variantText="smallLS">войти</LabelText>
                                        <img src={arrow} alt=""/>
                                    </Registration>
                                </NavLink>
                            </BottomFrame>
                        </ButtonAndBottomFrameRegistration>
                    </FormContainer>
                </FormRegistrationAllContainer>
            </RegistrationContainer>
        </AllForm>
    );
};
