import React from 'react';

import {NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {
    AssistiveText,
    AssistiveTextBoxStepOne, AssistiveTextError, BottomFrame, FormContainer,
    LabelBox, Registration,
    TextFields
} from '../authorization/styles';
import {ButtonAndBottomFrameRegistration, InputStylesSteps, TitleForm} from './styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {EColors} from '../pages/themes/themes';
import {Arrow} from '../pages/images/arrow';
import {TUseStateType} from './registration-container';

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
        formState: { isDirty, errors }
    } = useForm<{firstName: string, lastName: string}>({mode: 'onBlur', shouldFocusError: false});

    const onSubmitIncreaseStep = () => {
        setStepRegistration((prevState) => prevState + 1);
    };

    const onSubmitTwo = ({firstName, lastName}: {firstName: string, lastName: string}): void => {
        console.log(firstName);
        console.log(lastName);
        if (setState) {
            setState({...state, firstName, lastName});
        }
        onSubmitIncreaseStep()
    }

    console.log(state);

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
                            type="submit"
                            height={isMobileView ? '40px' : '52px'}
                            width={isMobileView ? '255px' : '416px'}
                            status="inStock"><LabelText
                            variantText={isMobileView ? 'smallLS' : 'medium16LS'}>последний
                            шаг</LabelText>
                        </ButtonComponent>
                        :
                        <ButtonComponent
                            type="submit"
                            height={isMobileView ? '40px' : '52px'}
                            width={isMobileView ? '255px' : '416px'}
                            status="inStock"><LabelText
                            variantText={isMobileView ? 'smallLS' : 'medium16LS'}>последний
                            шаг</LabelText>
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
