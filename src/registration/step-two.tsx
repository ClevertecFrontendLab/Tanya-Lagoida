import React from 'react';

import {NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {
    AssistiveText,
    AssistiveTextBoxStepOne, AssistiveTextError, BottomFrame, FormContainer,
    LabelBox, Registration,
    TextFields
} from '../authorization/styles';
import {ButtonAndBottomFrameRegistration, InputStylesSteps} from './styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {LabelText} from '../pages/labels/labels';
import arrow from '../pages/images/arrow.svg';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {TRegistrationRequest} from '../services/login-service-types';

type TFormComponentTypes = {
    setStepRegistration: (prevState: (prevState: number) => number) => void
}

export const StepTwo: React.FC<TFormComponentTypes> = ({
    setStepRegistration,
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors }
    } = useForm<TRegistrationRequest>({mode: 'onChange'});

    const onSubmitIncreaseStep = () => {
        setStepRegistration((prevState) => prevState + 1);
    };


    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmitIncreaseStep)}>

            <TextFields>
                <InputStylesSteps
                    errors={errors}
                    type="text"
                    id="firstName"
                    {...register('firstName', {required: true})}
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    placeholder="Имя"/>
                <LabelBox htmlFor="firstName">Имя</LabelBox>
                <AssistiveTextBoxStepOne>
                    {
                        errors.firstName ?
                            <AssistiveTextError>Поле не может быть пустым</AssistiveTextError>
                            : <AssistiveText/>
                    }

                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields>
                <InputStylesSteps
                    errors={errors}
                    type="text"
                    id="lastName"
                    {...register('lastName', {required: true})}
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    placeholder="Фамилия"/>
                <LabelBox htmlFor="lastName">Фамилия</LabelBox>
                <AssistiveTextBoxStepOne>
                    {
                        errors.lastName ?
                            <AssistiveTextError>Поле не может быть пустым</AssistiveTextError>
                            : <AssistiveText/>
                    }

                </AssistiveTextBoxStepOne>
            </TextFields>
            <ButtonAndBottomFrameRegistration>
                {
                    errors.firstName || errors.lastName ?
                        <ButtonComponent
                            disabled={true}
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
                            <img src={arrow} alt=""/>
                        </Registration>
                    </NavLink>
                </BottomFrame>
            </ButtonAndBottomFrameRegistration>
        </FormContainer>
    );
};
