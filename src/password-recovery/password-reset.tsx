import React from 'react';

import {Navigate, NavLink} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';

import {ButtonComponent} from '../pages/components/button/button-component';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {TPasswordResetRequest} from '../services/login-service-types';
import {
    AllForm,
    AssistiveText, AssistiveTextBox, AssistiveTextError,
    BottomFrame,
    HeaderLogin,
    InputStyles,
    LabelBox,
    Registration,
    TextFields
} from '../authorization/styles';
import {
    AssistiveTextBoxReset, ButtonAndBottomFrameReset,
    FormAllContainerPasswordReset,
    FormBox, FormContainerReset,
    LoginToPersonalAccount
} from './styles';
import {Arrow} from '../pages/images/arrow';
import {EColors} from '../pages/themes/themes';
import {MessageContainer} from '../authorization/message-container';

type TFormComponentTypes = {
    error?: any
    passwordReset?: any
    data?: any
}

export const PasswordReset: React.FC<TFormComponentTypes> = ({
    error,
    passwordReset,
    data
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {
        register,
        handleSubmit,
        formState: {errors},
        clearErrors,
    } = useForm<TPasswordResetRequest>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        shouldFocusError: false
    });

    const onSubmit: SubmitHandler<TPasswordResetRequest> = async (data) => {
        try {
            await passwordReset(data).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    const user = localStorage.getItem('user');
    if (user) {
        return <Navigate to="/"/>;
    }

    if (data) {
        return <MessageContainer
            text="Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля"
            title="Письмо выслано"/>;
    }

    return (
        <AllForm>
            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <FormAllContainerPasswordReset>
                <NavLink to="/auth">
                    <LoginToPersonalAccount>
                        <Arrow stroke={EColors.GreyBorder}/>
                        <LabelText
                            variantText="small500LS">вход в личный кабинет</LabelText>
                    </LoginToPersonalAccount>
                </NavLink>
                <FormBox>
                    <LabelText
                        variantText="large24">Восстановление пароля</LabelText>
                    <FormContainerReset
                        onSubmit={handleSubmit(onSubmit)}>
                        <TextFields>
                            <InputStyles
                                id="email"
                                aria-invalid={errors.email ? 'true' : 'false'}
                                onClick={() => {
                                    if (errors.email) {
                                        clearErrors('email');
                                    }
                                }}
                                {...register('email', {
                                    required: true,
                                    pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
                                })}

                                placeholder="Email"/>
                            <LabelBox htmlFor="email">Email</LabelBox>
                            <AssistiveTextBox>
                                {
                                    errors.email
                                        ?
                                        <AssistiveTextError>
                                            Введите корректный e-mail
                                        </AssistiveTextError>
                                        :
                                        error ?
                                            <AssistiveTextError>
                                                error
                                            </AssistiveTextError> : ''
                                }
                            </AssistiveTextBox>
                            <AssistiveTextBoxReset>
                                <AssistiveText>
                                    На этот email будет отправлено письмо с инструкциями по
                                    восстановлению пароля
                                </AssistiveText>
                            </AssistiveTextBoxReset>
                        </TextFields>
                        <ButtonAndBottomFrameReset>
                            <ButtonComponent
                                type="submit"
                                height={isMobileView ? '40px' : '52px'}
                                width={isMobileView ? '255px' : '416px'}
                                status="inStock"><LabelText
                                variantText={isMobileView ? 'smallLS' : 'medium16LS'}>восстановить</LabelText>
                            </ButtonComponent>
                            <BottomFrame>
                                <LabelText
                                    variantText="medium16LH24">Нет
                                    учётной записи?</LabelText>
                                <NavLink to="/registration">
                                    <Registration>
                                        <LabelText variantText="smallLS">Регистрация</LabelText>
                                        <Arrow stroke={EColors.Inherit}/>
                                    </Registration>
                                </NavLink>
                            </BottomFrame>
                        </ButtonAndBottomFrameReset>
                    </FormContainerReset>
                </FormBox>
            </FormAllContainerPasswordReset>
        </AllForm>
    );
};
