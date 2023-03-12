import React from 'react';
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';

import {
    AssistiveText,
    AssistiveTextBoxStepOne, AssistiveTextError, BottomFrame, FormContainer,
    LabelBox, Registration,
    TextFields
} from '../authorization/styles';
import {getCommonButtonProps} from '../func/get-common-button-props';
import {ButtonComponent} from '../pages/components/button/button-component';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {Arrow} from '../pages/images/arrow';
import {LabelText} from '../pages/labels/labels';
import {device} from '../pages/main/styles';
import {EColors} from '../pages/themes/themes';

import {TUseStateType} from './registration-container';
import {ButtonAndBottomFrameRegistration, InputStylesSteps, TitleForm} from './styles';

type TFormComponentTypes = {
    setStepRegistration: (prevState: (prevState: number) => number) => void
    stepRegistration: number
    setState?: (value: TUseStateType) => void
    state: {email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null}
}

export const StepTwo: React.FC<TFormComponentTypes> = ({
    setStepRegistration, state, setState, stepRegistration
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const {
        register,
        clearErrors,
        handleSubmit,
        formState: { errors }
    } = useForm<{firstName: string, lastName: string}>({mode: 'onBlur', shouldFocusError: false});

    const onSubmitIncreaseStep = () => {
        setStepRegistration((prevState) => prevState + 1);
    };

    const onSubmitTwo = ({firstName, lastName}: {firstName: string, lastName: string}): void => {
        if (setState) {
            setState({...state, firstName, lastName});
        }
        onSubmitIncreaseStep()
    }
    const commonButtonProps = getCommonButtonProps(isMobileView);

    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmitTwo)} data-test-id='register-form'>
            <TitleForm>
                <LabelText
                    variantText="large24">Регистрация
                </LabelText>
                <LabelText
                    variantText="medium14Bold">{stepRegistration} шаг из 3
                </LabelText>
            </TitleForm>
            <TextFields>
                <InputStylesSteps
                    onClick={() => {
                        if (errors.firstName) {
                            clearErrors('firstName');
                        }
                    }}
                    errorBorder={errors.firstName}
                    type="text"
                    id="firstName"
                    {...register('firstName', {required: true})}
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    placeholder="Имя"/>
                <LabelBox htmlFor="firstName">Имя</LabelBox>
                <AssistiveTextBoxStepOne>
                    {
                        errors.firstName ?
                            <AssistiveTextError data-test-id='hint'>Поле не может быть пустым</AssistiveTextError>
                            : <AssistiveText/>
                    }

                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields>
                <InputStylesSteps
                    onClick={() => {
                        if (errors.lastName) {
                            clearErrors('lastName');
                        }
                    }}
                    errorBorder={errors.lastName}
                    type="text"
                    id="lastName"
                    {...register('lastName', {required: true})}
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    placeholder="Фамилия"/>
                <LabelBox htmlFor="lastName">Фамилия</LabelBox>
                <AssistiveTextBoxStepOne>
                    {
                        errors.lastName ?
                            <AssistiveTextError data-test-id='hint'>Поле не может быть пустым</AssistiveTextError>
                            : <AssistiveText/>
                    }

                </AssistiveTextBoxStepOne>
            </TextFields>
            <ButtonAndBottomFrameRegistration>
                {
                    errors.firstName || errors.lastName ?
                        <ButtonComponent
                            disabled={true}
                            error = {errors}
                            {...commonButtonProps}
                        >
                            <LabelText variantText={isMobileView ? 'smallLS' : 'medium16LS'}>
                                последний шаг
                            </LabelText>
                        </ButtonComponent>
                        :
                        <ButtonComponent {...commonButtonProps}>
                            <LabelText variantText={isMobileView ? 'smallLS' : 'medium16LS'}>
                            последний шаг
                            </LabelText>
                        </ButtonComponent>
                }

                <BottomFrame>
                    <LabelText
                        variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Есть
                        учётная запись?</LabelText>
                    <NavLink to="/auth">
                        <Registration>
                            <LabelText variantText="smallLS">войти</LabelText>
                            <Arrow stroke={EColors.Inherit} />
                        </Registration>
                    </NavLink>
                </BottomFrame>
            </ButtonAndBottomFrameRegistration>
        </FormContainer>
    );
};
