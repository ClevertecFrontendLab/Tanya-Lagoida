import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import {SerializedError} from '@reduxjs/toolkit';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError, FetchBaseQueryMeta,
    MutationDefinition
} from '@reduxjs/toolkit/query';

import {
    AssistiveText,
    AssistiveTextBoxStepOne, AssistiveTextError, BottomFrame, FormContainer,
    InputStyles,
    LabelBox, Registration,
    TextFields
} from '../authorization/styles';
import {regesp} from '../constants/regesp';
import {getCommonButtonProps} from '../func/get-common-button-props';
import {IsError400} from '../func/is-error400';
import {ButtonComponent} from '../pages/components/button/button-component';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {Arrow} from '../pages/images/arrow';
import {LabelText} from '../pages/labels/labels';
import {device} from '../pages/main/styles';
import {EColors} from '../pages/themes/themes';
import {
    TAuthorizationResponse,
    TRegistrationRequest
} from '../services/login-service-types';

import {TUseStateType} from './registration-container';
import {ButtonAndBottomFrameRegistration, MaskedInputStyles, TitleForm} from './styles';

type TFormComponentTypes = {
    isError: boolean
    error: FetchBaseQueryError | SerializedError | undefined
    registration: MutationTrigger<MutationDefinition<TRegistrationRequest, BaseQueryFn<string | FetchArgs, unknown,
        FetchBaseQueryError, { shout?: boolean }, FetchBaseQueryMeta>, never, TAuthorizationResponse, 'userApi'>>
    setIsSuccessMessage?: (value: boolean) => void
    setIsUnSuccessMessage?: (value: boolean) => void
    setIsUnSuccessMessageSameLogin?: (value: boolean) => void
    setState?: (value: TUseStateType) => void
    stepRegistration: number
    state: { email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null }
}

export const StepThree: React.FC<TFormComponentTypes> = ({
    stepRegistration,
    registration,
    state,
    setIsSuccessMessage,
    setIsUnSuccessMessage,
    setIsUnSuccessMessageSameLogin,
    setState
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const {
        register,
        control,
        handleSubmit,
        clearErrors,
        getValues,
        formState: {errors}
    } = useForm<{ phone: string, email: string }>({
        mode: 'onBlur',
        shouldFocusError: false,
        criteriaMode: 'all'
    });

    const setMessage = (error: unknown) => {
        if (error && IsError400(error)) {
            if (setIsUnSuccessMessageSameLogin) {
                setIsUnSuccessMessageSameLogin(true);
            }
        } else if (setIsUnSuccessMessage) {
            setIsUnSuccessMessage(true);
        }
    };

    const onSubmit: SubmitHandler<{ phone: string, email: string }> = async (data) => {
        const phone = getValues('phone');
        const email = getValues('email');

        if (setState) {
            setState({...state, phone, email});
        }

        const requestData = {...state, ...data};

        try {
            await registration(requestData).unwrap();
            if (setIsSuccessMessage) {
                setIsSuccessMessage(true);
            }

        } catch (error) {
            setMessage(error);
        }
    };
    const commonButtonProps = getCommonButtonProps(isMobileView);

    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmit)} data-test-id="register-form">
            <TitleForm>
                <LabelText
                    variantText="large24">Регистрация
                </LabelText>
                <LabelText
                    variantText="medium14Bold">{stepRegistration} шаг из 3
                </LabelText>
            </TitleForm>
            <TextFields>
                <Controller
                    name="phone"
                    control={control}
                    render={() => (
                        <MaskedInputStyles
                            mask="+375 (99) 999-99-99"
                            inputMode="tel"
                            maskChar="x"
                            placeholder="Номер телефона"
                            id="phone"
                            errorborder={errors.phone}
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            onClick={() => {
                                if (errors.phone) {
                                    clearErrors('phone');
                                }
                            }}
                            {...register('phone', {
                                    required: true,
                                    pattern: regesp.phone
                                }
                            )}
                        />
                    )}
                />
                <LabelBox htmlFor="phone"> Номер телефона</LabelBox>
                <AssistiveTextBoxStepOne>
                    {
                        errors.phone?.type === 'required' ?
                            <AssistiveTextError data-test-id="hint">
                                Поле не может быть пустым
                            </AssistiveTextError>
                            :
                            errors.phone ?
                                <AssistiveTextError data-test-id="hint">
                                    В формате +375 (xx) xxx-xx-xx
                                </AssistiveTextError>
                                :
                                <AssistiveText data-test-id="hint">
                                    В формате +375 (xx) xxx-xx-xx
                                </AssistiveText>
                    }
                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields>
                <InputStyles
                    onClick={() => {
                        if (errors.email) {
                            clearErrors('email');
                        }
                    }}
                    errorBorder={errors.email}
                    id="email"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    {...register('email', {
                        required: true,
                        pattern: regesp.email
                    })}
                    placeholder="E-mail"/>
                <LabelBox htmlFor="email">E-mail</LabelBox>

                <AssistiveTextBoxStepOne>
                    {
                        errors.email?.type === 'required' ?
                            <AssistiveTextError data-test-id="hint">
                                Поле не может быть пустым
                            </AssistiveTextError>
                            :
                            errors.email ?
                                <AssistiveTextError data-test-id="hint">Введите корректный e-mail
                                </AssistiveTextError> :
                                <AssistiveText data-test-id="hint">Введите корректный e-mail
                                </AssistiveText>
                    }

                </AssistiveTextBoxStepOne>
            </TextFields>
            <ButtonAndBottomFrameRegistration>
                {
                    errors.phone || errors.email ?
                        <ButtonComponent
                            disabled={true}
                            error={errors}
                            {...commonButtonProps}
                        >
                            <LabelText
                            variantText={isMobileView ? 'smallLS' : 'medium16LS'}>зарегистрироваться</LabelText>
                        </ButtonComponent>
                        :
                        <ButtonComponent
                            {...commonButtonProps}
                        >
                            <LabelText
                            variantText={isMobileView ? 'smallLS' : 'medium16LS'}>зарегистрироваться</LabelText>
                        </ButtonComponent>
                }
                <BottomFrame>
                    <LabelText
                        variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Есть
                        учётная запись?</LabelText>
                    <NavLink to="/auth">
                        <Registration>
                            <LabelText variantText="smallLS">войти</LabelText>
                            <Arrow stroke={EColors.Inherit}/>
                        </Registration>
                    </NavLink>
                </BottomFrame>
            </ButtonAndBottomFrameRegistration>
        </FormContainer>
    );
};
