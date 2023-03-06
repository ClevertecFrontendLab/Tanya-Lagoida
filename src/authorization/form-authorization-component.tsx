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
    Registration,
    TextFields
} from './styles';
import {LabelText} from '../pages/labels/labels';
import {ButtonComponent} from '../pages/components/button/button-component';

import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {TAuthorizationRequest, TAuthorizationResponse} from '../services/login-service-types';
import {userReceived} from '../store/auth-slice';
import {useAppDispatch} from '../store/store';
import {EColors} from '../pages/themes/themes';
import {Arrow} from '../pages/images/arrow';
import {ErrorsContainer} from './errors-container';
import {EyeClosed} from '../pages/images/eye-closed';
import {Eye} from '../pages/images/eye';


type TFormComponentTypes = {
    error: any
    // error: FetchBaseQueryError | SerializedError | undefined
    authorization: MutationTrigger<MutationDefinition<TAuthorizationRequest, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, { shout?: boolean }, FetchBaseQueryMeta>, never, TAuthorizationResponse, 'userApi'>>
}

export const FormAuthorizationComponent: React.FC<TFormComponentTypes> = ({
    authorization,
    error
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {register, handleSubmit, formState: {touchedFields}} = useForm<TAuthorizationRequest>({mode: 'onBlur', reValidateMode: 'onBlur', shouldFocusError: false});
    const dispatch = useAppDispatch();
    const [passwordType, setPasswordType] = useState('password');

    const togglePassword = (event: any) => {
        event.preventDefault()
        if (passwordType === 'password') {
            setPasswordType('text');
        } else if (passwordType === 'text') {
            setPasswordType('password');
        }
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
        return <ErrorsContainer title="Вход не выполнен"
                                text="Что-то пошло не так. Попробуйте ещё раз"
                                textButton="повторить"/>;
    }

    const user = localStorage.getItem('user');
    if (user) {
        return <Navigate to="/"/>;
    }

    return (
        <AllForm>
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
                        <InputStyles
                            type="text"
                            id="identifier"
                            {...register('identifier', {required: true})}
                            error={error}
                            placeholder="Логин"/>
                        <LabelBox htmlFor="identifier">Логин</LabelBox>
                        <AssistiveTextBox>
                            <AssistiveText/>
                        </AssistiveTextBox>
                    </TextFields>
                    <TextFields>
                        <InputStyles
                            type={passwordType}
                            id="password" {...register('password', {required: true})}
                            error={error}
                            placeholder="Пароль"/>
                        <LabelBox htmlFor="password">Пароль</LabelBox>
                        <button
                            type='button'
                            onClick={togglePassword}>
                            {
                                passwordType === 'password' ?
                                    <EyeClosed/>
                                    :
                                    <Eye/>
                            }
                        </button>
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
                                ? <NavLink to="/forgot-pass">
                                    <AssistiveTextAllError>
                                        <LabelText variantText="small500">Восстановить?</LabelText>
                                    </AssistiveTextAllError>
                                </NavLink>
                                :
                                <NavLink to="/forgot-pass">
                                <AssistiveText>
                                    Забыли логин или пароль?
                                </AssistiveText>
                                </NavLink>
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
                                    <Arrow stroke={EColors.Inherit}/>
                                </Registration>
                            </NavLink>
                        </BottomFrame>
                    </ButtonAndBottomFrame>
                </FormContainer>
            </FormAllContainer>
        </AllForm>
    );
};
