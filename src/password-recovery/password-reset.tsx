import React from 'react';

import {Navigate, NavLink, useSearchParams} from 'react-router-dom';
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
import {useAppSelector} from '../store/store';
import {PasswordRecoveryContainer} from './password-recovery-container';

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

    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isAuth = useAppSelector((state) => state.userSlice.isAuth);
    const {
        register,
        handleSubmit,
        formState: {errors},
        clearErrors,
    } = useForm<TPasswordResetRequest>({
        mode: 'onBlur',
        shouldFocusError: false
    });

    const onSubmit: SubmitHandler<TPasswordResetRequest> = async (data) => {
        try {
            await passwordReset(data).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    if (isAuth) {
        return <Navigate to="/"/>;
    }

    if (data) {
        return <MessageContainer
            text="Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля"
            title="Письмо выслано"/>;
    }

    if (code) {
        return <PasswordRecoveryContainer code={code}/>;
    }

    return (
        <AllForm data-test-id="auth">
            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <FormAllContainerPasswordReset data-test-id="send-email-form"
                                           onSubmit={handleSubmit(onSubmit)}>
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
                    <FormContainerReset>
                        <TextFields>
                            <InputStyles
                                id="email"
                                aria-invalid={errors.email ? 'true' : 'false'}
                                onClick={() => {
                                    if (errors) {
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
                                    errors.email?.type === 'required' ?
                                        <AssistiveTextError data-test-id="hint">
                                            Поле не может быть пустым
                                        </AssistiveTextError>
                                        :
                                        errors.email?.type === 'pattern' ?
                                    <AssistiveTextError data-test-id="hint">
                                        Введите корректный e-mail
                                    </AssistiveTextError>
                                    :
                                        error ?
                                            <AssistiveTextError data-test-id="hint">
                                                error
                                            </AssistiveTextError>
                                            : null
                                }
                            </AssistiveTextBox>
                            <AssistiveTextBoxReset>
                                <AssistiveText data-test-id="hint">
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
