import React, {useState} from 'react';

import {Navigate, useSearchParams} from 'react-router-dom';
import {SubmitHandler, useForm} from 'react-hook-form';

import {ButtonComponent} from '../pages/components/button/button-component';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {TPasswordRecoveryRequest} from '../services/login-service-types';
import {
    AllForm,
    AssistiveText, AssistiveTextBox, AssistiveTextBoxStepOne, AssistiveTextError,
    BottomFrame, ButtonAndBottomFrame, FormContainer,
    HeaderLogin,
    InputStyles,
    LabelBox,
    TextFields
} from '../authorization/styles';
import {
    AssistiveTextBoxReset, ButtonAndBottomFrameReset, FormAllContainerPasswordRecovery,
} from './styles';
import {MessageContainer} from '../authorization/message-container';
import {EyeClosed} from '../pages/images/eye-closed';
import {Eye} from '../pages/images/eye';
import {useAppSelector} from '../store/store';

type TFormComponentTypes = {
    error?: any
    passwordRecovery?: any
    data?: any
}

export const PasswordRecovery: React.FC<TFormComponentTypes> = ({
    error,
    passwordRecovery,
    data
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {
        register,
        handleSubmit,
        formState: {errors},
        clearErrors,


    } = useForm<TPasswordRecoveryRequest>({ shouldFocusError: false});
    const [passwordType, setPasswordType] = useState('password');
    const [passwordTypeTwo, setPasswordTypeTwo] = useState('password');
    const isAuth = useAppSelector((state) => state.userSlice.isAuth);

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');

        } else if (passwordType === 'text') {
            setPasswordType('password');

        }

    };
    const togglePasswordTwo = () => {
        if (passwordTypeTwo === 'password') {
            setPasswordTypeTwo('text');

        } else if (passwordTypeTwo === 'text') {
            setPasswordTypeTwo('password');

        }

    };
    const [searchParams] = useSearchParams();

    const code = searchParams.get('code');

    const onSubmit: SubmitHandler<TPasswordRecoveryRequest> = async (data) => {
        try {
            await passwordRecovery(data).unwrap();
        } catch (error) {
            console.log(error);
        }
    };

    if (isAuth) {
        return <Navigate to="/"/>;
    }

    // if (data) {
    //     return <MessageContainer
    //         text="Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля"
    //         title="Письмо выслано"/>;
    // }

    return (
        <AllForm>
            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <FormAllContainerPasswordRecovery>
                <LabelText
                    variantText="large24">Восстановление пароля</LabelText>
                <FormContainer
                    onSubmit={handleSubmit(onSubmit)}>
                    <TextFields>
                        <InputStyles

                            // errorBorderPass={errors.password}
                            type={passwordType}
                            id="password"
                            aria-invalid={errors.password ? 'true' : 'false'}
                            onClick={() => {
                                if (errors.password) {
                                    clearErrors('password');
                                }
                            }}
                            {...register('password', {
                                required: true,
                                minLength: 8,
                                pattern: /^.*[A-ZА-ЯЁ]+.*\d+|.*\d+.*[A-ZА-ЯЁ]+$/
                            })}

                            placeholder="password"/>
                        <LabelBox htmlFor="password">Новый пароль</LabelBox>
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
                        <AssistiveTextBoxStepOne>
                                    <AssistiveText>
                                        Пароль не менее 8 символов, с заглавной буквой и цифрой
                                    </AssistiveText>

                        </AssistiveTextBoxStepOne>
                    </TextFields>
                    <TextFields>
                        <InputStyles
                            onFocusCapture={event => {
                                event.stopPropagation();
                                event.preventDefault()
                            }}
                            errorBorder={errors.passwordConfirmation}
                            type={passwordType}
                            id="passwordConfirmation"
                            aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
                            onClick={() => {
                                if (errors.passwordConfirmation) {
                                    clearErrors('passwordConfirmation');
                                }
                            }}
                            {...register('passwordConfirmation', {
                                required: true,
                                minLength: 8,
                                pattern: /^.*[A-ZА-ЯЁ]+.*\d+|.*\d+.*[A-ZА-ЯЁ]+$/
                            })}

                            placeholder="passwordConfirmation"/>
                        <LabelBox htmlFor="passwordConfirmation">Повторите пароль</LabelBox>
                        <button
                            type="button"
                            onClick={togglePasswordTwo}>
                            {
                                passwordTypeTwo === 'password' ?
                                    <EyeClosed/>
                                    :
                                    <Eye/>
                            }
                        </button>
                        <AssistiveTextBox>
                            {
                                errors.passwordConfirmation
                                    ?
                                    <AssistiveTextError>
                                        Пароли не совпадают
                                    </AssistiveTextError>
                                    : ''
                            }
                        </AssistiveTextBox>
                        <AssistiveTextBox>
                            <AssistiveText/>
                        </AssistiveTextBox>

                    </TextFields>
                    <ButtonAndBottomFrame>
                        {
                            errors.password || errors.passwordConfirmation ?
                                <ButtonComponent
                                    disabled={true}
                                    error = {errors}
                                    type="submit"
                                    height={isMobileView ? '40px' : '52px'}
                                    width={isMobileView ? '255px' : '416px'}
                                    status="inStock"><LabelText
                                    variantText={isMobileView ? 'smallLS' : 'medium16LS'}>сохранить
                                    изменения</LabelText>
                                </ButtonComponent>
                                :
                                <ButtonComponent
                                    type="submit"
                                    height={isMobileView ? '40px' : '52px'}
                                    width={isMobileView ? '255px' : '416px'}
                                    status="inStock"><LabelText
                                    variantText={isMobileView ? 'smallLS' : 'medium16LS'}>сохранить
                                    изменения</LabelText>
                                </ButtonComponent>
                        }

                        <BottomFrame>
                            <LabelText
                                variantText={isMobileView ?'medium15LH' : 'medium16LH24'}>После сохранения войдите в библиотеку,
                                используя новый пароль</LabelText>
                        </BottomFrame>
                    </ButtonAndBottomFrame>
                </FormContainer>
            </FormAllContainerPasswordRecovery>
        </AllForm>
    );
};
