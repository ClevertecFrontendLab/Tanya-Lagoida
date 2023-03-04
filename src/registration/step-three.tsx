import React from 'react';

import {NavLink} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
    AssistiveText,
    AssistiveTextBoxStepOne, BottomFrame, FormContainer,
    InputStyles,
    LabelBox, Registration,
    TextFields
} from '../authorization/styles';
import {ButtonAndBottomFrameRegistration} from './styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {LabelText} from '../pages/labels/labels';
import arrow from '../pages/images/arrow.svg';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {TRegistrationRequest} from '../services/login-service-types';
import {userReceived} from '../store/auth-slice';
import {useAppDispatch} from '../store/store';

type TFormComponentTypes = {
    error: any
    registration: any
}

export const StepThree: React.FC<TFormComponentTypes> = ({
    error,
    registration
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors }
    } = useForm<TRegistrationRequest>({mode: 'onChange'});
    const onSubmit: SubmitHandler<TRegistrationRequest> = async (data) => {
        try {
            const response = await registration(data).unwrap();
            localStorage.setItem('user', JSON.stringify(response.user));
            dispatch(userReceived(response.user));
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmit)}>

            <TextFields>
                <InputStyles
                    error={error}
                    type="text"
                    id="phone"
                    {...register('phone', {
                        required: true,
                        pattern: /^[A-Za-z0-9]+$/
                    })}
                    placeholder="Номер телефона"/>
                <LabelBox htmlFor="phone">Номер телефона</LabelBox>
                <AssistiveTextBoxStepOne>


                    <AssistiveText>В формате +375 (xx) xxx-xx-xx


                    </AssistiveText>


                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields>
                <InputStyles
                    error={error}
                    type="email"
                    id="email"
                    {...register('email', {
                        required: true,
                        minLength: 20,
                        pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
                    })}
                    placeholder="E-mail"/>
                <LabelBox htmlFor="email">E-mail</LabelBox>

                <AssistiveTextBoxStepOne>
                    <AssistiveText>Введите корректный e-mail
                    </AssistiveText>
                </AssistiveTextBoxStepOne>
            </TextFields>
            <ButtonAndBottomFrameRegistration>
                <ButtonComponent
                    type="submit"
                    height={isMobileView ? '40px' : '52px'}
                    width={isMobileView ? '255px' : '416px'}
                    status="inStock"><LabelText
                    variantText={isMobileView ? 'smallLS' : 'medium16LS'}>зарегистрироваться</LabelText>
                </ButtonComponent>
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
