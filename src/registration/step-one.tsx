import React, {MouseEventHandler, useState} from 'react';

import {NavLink} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {
    AssistiveText,
    AssistiveTextBoxStepOne, AssistiveTextError, BottomFrame, FormContainer,
    LabelBox, Registration,
    TextFields
} from '../authorization/styles';
import checkPassword from '../pages/images/Icon_Other.svg';
import {ButtonAndBottomFrameRegistration, InputStylesSteps} from './styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {TRegistrationRequest} from '../services/login-service-types';
import {Arrow} from '../pages/images/arrow';
import {EColors} from '../pages/themes/themes';
import {EyeClosed} from '../pages/images/eye-closed';
import {Eye} from '../pages/images/eye';

type TFormComponentTypes = {
    setStepRegistration: (prevState: (prevState: number) => number) => void
    setState: any
    state: { email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null }
}

export const StepOne: React.FC<TFormComponentTypes> = ({
    setStepRegistration, setState, state
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {
        register,
        getValues,
        handleSubmit,
        formState: {isDirty, isValid, errors,}
    } = useForm<{ username: string, password: string }>({
        mode: 'onChange',
        shouldFocusError: false,
        criteriaMode: 'all'
    });
    const [passwordType, setPasswordType] = useState('password');
    console.log(errors);

    const onSubmitIncreaseStep = () => {
        setStepRegistration((prevState: number) => prevState + 1);
    };

    const onSubmitOne = (): void => {

        const username = getValues('username');
        const password = getValues('password');

        setState({...state, username, password});

        onSubmitIncreaseStep();
    };

    const togglePassword = (event: any) => {
        event.stopPropagation();
        if (passwordType === 'password') {
            setPasswordType('text');
        } else if (passwordType === 'text') {
            setPasswordType('password');
        }
    };

    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmitOne)}>
            <TextFields>
                <InputStylesSteps
                    errorBorder={errors.username}
                    errors={errors}
                    type="text"
                    id="username"
                    {...register('username', {
                        required: true,
                        pattern: /^[A-Za-z0-9]+$/,
                        validate: {
                            matchLetterPattern: (value) => /[A-Za-z]/.test(value),
                            matchNumberPattern: (value) => /\d/.test(value)
                        }
                    })}
                    placeholder="Придумайте логин для входа"/>
                <LabelBox htmlFor="username">Придумайте логин для
                    входа</LabelBox>


                <AssistiveTextBoxStepOne>
                    {
                        errors?.username?.types?.pattern ?
                            <AssistiveTextError>
                                Используйте для логина латинский алфавит и цифры
                            </AssistiveTextError>
                            :
                            <AssistiveText>
                                Используйте для логина {
                                errors?.username?.types?.matchLetterPattern ? <AssistiveTextError>
                                        латинский алфавит
                                    </AssistiveTextError> :
                                    <AssistiveText>латинский алфавит</AssistiveText>
                            } и {
                                errors?.username?.types?.matchNumberPattern ? <AssistiveTextError>
                                        цифры
                                    </AssistiveTextError> :
                                    <AssistiveText>цифры</AssistiveText>
                            }
                            </AssistiveText>
                    }
                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields errorForStyle={errors.password}>
                <InputStylesSteps
                    errorBorder={errors.password}
                    errors={errors}
                    type={passwordType}
                    id="password"
                    {...register('password', {
                        required: true,
                        validate: {
                            checkLength: (value) => value.length >= 8,
                            matchLetterPattern: (value) => /[A-ZА-ЯЁ]/.test(value),
                            matchNumberPattern: (value) => /\d/.test(value)
                        }
                    })}
                    placeholder="Пароль"/>
                <LabelBox htmlFor="password">Пароль</LabelBox>
                <img src={checkPassword} alt=""/>
                <button
                    type="button"
                    onClick={togglePassword}>
                    {
                        passwordType === 'password' ?
                            <EyeClosed/>
                            :
                            <Eye/>
                    }
                </button>

                {/*errors.password ?*/}
                {/*    <AssistiveTextBoxStepOne>*/}
                {/*        <AssistiveTextError>*/}
                {/*            Пароль не менее 8 символов, с заглавной буквой и цифрой*/}
                {/*        </AssistiveTextError>*/}
                {/*    </AssistiveTextBoxStepOne> :*/}
                <AssistiveTextBoxStepOne>
                    <AssistiveText>
                        Пароль {
                        errors?.password?.types?.checkLength ? <AssistiveTextError>
                                не менее 8 символов
                            </AssistiveTextError>
                            : <AssistiveText>
                                не менее 8 символов
                            </AssistiveText>
                    }
                        , с {errors?.password?.types?.matchLetterPattern ? <AssistiveTextError>
                        заглавной буквой
                    </AssistiveTextError> : <AssistiveText>
                        заглавной буквой
                    </AssistiveText>
                    } и {errors?.password?.types?.matchNumberPattern ? <AssistiveTextError>
                        цифрой
                    </AssistiveTextError> : <AssistiveText>
                        цифрой
                    </AssistiveText>
                    }
                    </AssistiveText>
                </AssistiveTextBoxStepOne>


            </TextFields>
            <ButtonAndBottomFrameRegistration>
                {
                    errors.username || errors.password ?
                        <ButtonComponent
                        disabled={true}
                        error = {errors}
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
                            <Arrow stroke={EColors.Inherit}/>
                        </Registration>
                    </NavLink>
                </BottomFrame>
            </ButtonAndBottomFrameRegistration>
        </FormContainer>
    );
};
