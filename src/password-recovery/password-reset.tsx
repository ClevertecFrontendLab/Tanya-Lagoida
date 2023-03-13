import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Navigate, NavLink, useSearchParams} from 'react-router-dom';
import {SerializedError} from '@reduxjs/toolkit';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError, FetchBaseQueryMeta,
    MutationDefinition
} from '@reduxjs/toolkit/query';

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
import {regesp} from '../constants/regesp';
import {ButtonComponent} from '../pages/components/button/button-component';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {Arrow} from '../pages/images/arrow';
import {LabelText} from '../pages/labels/labels';
import {device} from '../pages/main/styles';
import {EColors} from '../pages/themes/themes';
import {
    TPasswordResetRequest, TPasswordResetResponse,
} from '../services/login-service-types';
import {useAppSelector} from '../store/store';

import {PasswordRecoveryContainer} from './password-recovery-container';
import {
    AssistiveTextBoxReset, ButtonAndBottomFrameReset,
    FormAllContainerPasswordReset,
    FormBox, FormContainerReset,
    LoginToPersonalAccount
} from './styles';
import {getCommonButtonProps} from '../func/get-common-button-props';

type TFormComponentTypes = {
    error?: FetchBaseQueryError | SerializedError | undefined
    passwordReset: MutationTrigger<MutationDefinition<TPasswordResetRequest, BaseQueryFn<string | FetchArgs, unknown,
        FetchBaseQueryError, { shout?: boolean }, FetchBaseQueryMeta>, never, TPasswordResetResponse, 'userApi'>>
    setIsSuccessMessage?: (value: boolean) => void
}

export const PasswordReset: React.FC<TFormComponentTypes> = ({
    error,
    passwordReset,
    setIsSuccessMessage
}) => {

    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isAuth = useAppSelector((state) => state.userSlice.isAuth);
    const [isFieldEmptyError, setIsFieldEmptyError] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        trigger,
        formState: {errors},
        getFieldState,
        clearErrors,
    } = useForm<TPasswordResetRequest>({
        shouldFocusError: false
    });

    const onSubmit: SubmitHandler<TPasswordResetRequest> = async (data) => {
        try {
            await passwordReset(data).unwrap();
            if (setIsSuccessMessage) {
                setIsSuccessMessage(true);
            }
        } catch (errorResponse) {
            // error
        }
    };

    if (isAuth) {
        return <Navigate to="/"/>;
    }
    if (code) {
        return <PasswordRecoveryContainer code={code}/>;
    }
    const commonButtonProps = getCommonButtonProps(isMobileView);

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
                                errorBorder={errors.email}
                                id="email"
                                aria-invalid={errors.email ? 'true' : 'false'}
                                onClick={() => {
                                    if (errors) {
                                        setIsFieldEmptyError(false);
                                        clearErrors('email');
                                    }
                                }}
                                {...register('email', {
                                    required: true,
                                    pattern: regesp.email,
                                })}
                                onBlur={async () => {
                                    setIsFieldEmptyError(true);
                                    await trigger('email');
                                    const {error: errorEmail, isDirty} = getFieldState('email');

                                    if (!errorEmail) {

                                        setIsFieldEmptyError(false);
                                    }
                                    if (isDirty) {
                                        setIsFieldEmptyError(false);
                                    }
                                }}
                                placeholder="Email"/>
                            <LabelBox htmlFor="email">Email</LabelBox>
                            <AssistiveTextBox>

                                {
                                    isFieldEmptyError ?
                                        <AssistiveTextError>
                                            <LabelText variantText="small500" data-test-id="hint">Поле
                                                не может быть пустым
                                            </LabelText>
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
                            {
                                errors.email ?
                                    <ButtonComponent
                                        disabled={true}
                                        error={errors.email}
                                        {...commonButtonProps}
                                    >
                                        <LabelText
                                        variantText={isMobileView ? 'smallLS' : 'medium16LS'}>восстановить</LabelText>
                                    </ButtonComponent>
                                    :
                                    <ButtonComponent
                                        {...commonButtonProps}
                                    >
                                        <LabelText
                                        variantText={isMobileView ? 'smallLS' : 'medium16LS'}>восстановить</LabelText>
                                    </ButtonComponent>
                            }
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
