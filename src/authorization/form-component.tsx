import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError, FetchBaseQueryMeta,
    MutationDefinition
} from '@reduxjs/toolkit/query';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {Navigate, NavLink} from 'react-router-dom';
import {
    AllForm,
    AssistiveText,
    AssistiveTextAllError, AssistiveTextBox, AssistiveTextError,
    BottomFrame,
    ButtonAndBottomFrame,
    FormAllContainer,
    FormContainer,
    HeaderLogin,
    InputStyles,
    LabelBox,
    LoginContainer,
    Registration,
    TextFields
} from './styles';
import {LabelText} from '../pages/labels/labels';
import {ButtonComponent} from '../pages/components/button/button-component';
import arrow from '../pages/images/arrow.svg';
import eye from '../pages/images/Eye.svg';
import eyeClosed from '../pages/images/eye-closed.svg';

import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {TAuthorizationRequest, TAuthorizationResponse} from '../services/login-service-types';
import {userReceived} from '../store/auth-slice';
import {useAppDispatch} from '../store/store';
import {LoginFailed} from './login-failed';


type TFormComponentTypes = {
    error: any
    // error: FetchBaseQueryError | SerializedError | undefined
    authorization: MutationTrigger<MutationDefinition<TAuthorizationRequest, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, { shout?: boolean }, FetchBaseQueryMeta>, never, TAuthorizationResponse, 'userApi'>>
}

export const FormComponent: React.FC<TFormComponentTypes> = ({authorization, error}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {register, handleSubmit} = useForm<TAuthorizationRequest>();
    const dispatch = useAppDispatch();
    const [passwordType, setPasswordType] = useState('password');

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };

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

    if (error && error.status !== 400) {
        return <LoginFailed/>;
    }

    const user = localStorage.getItem('user');
    if (user) {
        return <Navigate to="/"/>;
    }

    return (
        <AllForm>
            <LoginContainer>
                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <FormAllContainer>
                    <LabelText
                        variantText="large24">Вход в личный кабинет</LabelText>
                    <FormContainer
                        onSubmit={handleSubmit(onSubmit)}>
                        <TextFields>
                            <InputStyles {...register('identifier', {required: true})}
                                         error={error} placeholder="Логин"/>
                            <LabelBox htmlFor="identifier">Логин</LabelBox>
                            <AssistiveTextBox>
                                <AssistiveText/>
                            </AssistiveTextBox>
                        </TextFields>
                        <TextFields>
                            <InputStyles type={passwordType}
                                         id="password" {...register('password', {required: true})}
                                         error={error} placeholder="Пароль"/>
                            <LabelBox htmlFor="password">Пароль</LabelBox>
                            <img src={passwordType === 'password' ? eyeClosed : eye} alt=""
                                 onClick={togglePassword}/>
                            <AssistiveTextBox>
                                {error && error.status === 400
                                    ? <AssistiveTextError>
                                        <LabelText variantText="small500">Неверный логин или
                                            пароль!</LabelText>
                                    </AssistiveTextError>
                                    : <AssistiveTextError/>
                                }
                            </AssistiveTextBox>
                            <AssistiveTextBox>
                                {error && error.status === 400
                                    ? <AssistiveTextAllError>
                                        <LabelText variantText="small500">Восстановить?</LabelText>
                                    </AssistiveTextAllError>
                                    :
                                    <AssistiveText>
                                        Забыли логин или пароль?
                                    </AssistiveText>
                                }
                            </AssistiveTextBox>
                        </TextFields>
                        <ButtonAndBottomFrame>
                            <ButtonComponent
                                type="submit"
                                height={isMobileView ? '40px' : '52px'}
                                width={isMobileView ? '255px' : '416px'}
                                status="inStock"><LabelText
                                variantText={isMobileView ? 'smallLS' : 'medium16LS'}>вход</LabelText>
                            </ButtonComponent>
                            <BottomFrame>
                                <LabelText
                                    variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Нет
                                    учётной записи?</LabelText>
                                <NavLink to="/registration">
                                    <Registration>
                                        <LabelText variantText="smallLS">Регистрация</LabelText>
                                        <img src={arrow} alt=""/>
                                    </Registration>
                                </NavLink>
                            </BottomFrame>
                        </ButtonAndBottomFrame>
                    </FormContainer>
                </FormAllContainer>
            </LoginContainer>
        </AllForm>
    );
};