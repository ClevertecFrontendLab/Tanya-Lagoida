import React, {useState} from 'react';

import {NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {
    AssistiveText,
    AssistiveTextBoxStepOne, AssistiveTextError, BottomFrame, FormContainer,
    InputStyles,
    LabelBox, Registration,
    TextFields
} from '../authorization/styles';
import eyeClosed from '../pages/images/eye-closed.svg';
import eye from '../pages/images/Eye.svg';
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

export const StepOne: React.FC<TFormComponentTypes> = ({
    setStepRegistration
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid, errors }
    } = useForm<TRegistrationRequest>({mode: 'onChange'});
    const [passwordType, setPasswordType] = useState('password');

    const onSubmitIncreaseStep = () => {
        setStepRegistration((prevState: number) => prevState + 1);
    };

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            return;
        }
        setPasswordType('password');
    };


    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmitIncreaseStep)}>
            <TextFields>
                <InputStylesSteps
                    errors={errors}
                    type="text"
                    id="username"
                    {...register('username', {
                        required: true,
                        pattern: /^[A-Za-z0-9]+$/
                    })}
                    placeholder="Придумайте логин для входа"/>
                <LabelBox htmlFor="username">Придумайте логин для
                    входа</LabelBox>
                <AssistiveTextBoxStepOne>


                    <AssistiveText>
                        Используйте для логина {
                        errors.username ? <AssistiveTextError>
                                латинский алфавит
                            </AssistiveTextError> :
                            <AssistiveText>латинский алфавит</AssistiveText>
                    } и {
                        errors.username ? <AssistiveTextError>
                                цифры
                            </AssistiveTextError> :
                            <AssistiveText>цифры</AssistiveText>
                    }


                    </AssistiveText>


                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields>
                <InputStylesSteps
                    errors={errors}
                    type={passwordType}
                    id="password"
                    {...register('password', {
                        required: true,
                        minLength: 20,
                        pattern: /^.*[A-ZА-ЯЁ]+.*\d+|.*\d+.*[A-ZА-ЯЁ]+$/
                    })}
                    placeholder="Пароль"/>
                <LabelBox htmlFor="password">Пароль</LabelBox>
                <img src={passwordType === 'password' ? eyeClosed : eye} alt=""
                     onClick={togglePassword}/>

                <AssistiveTextBoxStepOne>
                    <AssistiveText>
                        Пароль <AssistiveTextError>
                        не менее 8 символов
                    </AssistiveTextError>
                        , с <AssistiveTextError>
                        заглавной буквой
                    </AssistiveTextError> и <AssistiveTextError>
                        цифрой
                    </AssistiveTextError>
                    </AssistiveText>
                </AssistiveTextBoxStepOne>
            </TextFields>
            <ButtonAndBottomFrameRegistration>
                {
                    errors.password || errors.username ?
                        <ButtonComponent
                            disabled={true}
                            type="submit"
                            height={isMobileView ? '40px' : '52px'}
                            width={isMobileView ? '255px' : '416px'}
                            status="inStock"><LabelText
                            variantText={isMobileView ? 'smallLS' : 'medium16LS'}>следующий
                            шаг</LabelText>
                        </ButtonComponent>
                        :
                        <ButtonComponent
                            type="submit"
                            height={isMobileView ? '40px' : '52px'}
                            width={isMobileView ? '255px' : '416px'}
                            status="inStock"><LabelText
                            variantText={isMobileView ? 'smallLS' : 'medium16LS'}>следующий
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
