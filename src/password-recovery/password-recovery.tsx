import React, {useRef, useState} from 'react';

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
    BottomFrame, ButtonAndBottomFrame, FormContainerAuth,
    HeaderLogin,
    InputStyles,
    LabelBox,
    TextFields
} from '../authorization/styles';
import {
    FormAllContainerPasswordRecovery,
} from './styles';
import {EyeClosed} from '../pages/images/eye-closed';
import {Eye} from '../pages/images/eye';
import {useAppSelector} from '../store/store';
import checkPassword from '../pages/images/Icon_Other.svg';

type TFormComponentTypes = {
    error?: any
    passwordRecovery?: any
    data?: any
    setIsUnSuccessMessage?: any
    setIsSuccessMessage?: any
}

export const PasswordRecovery: React.FC<TFormComponentTypes> = ({
    passwordRecovery,
    setIsUnSuccessMessage,
    setIsSuccessMessage,
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {
        register,
        handleSubmit,
        getFieldState,
        formState: {errors},
        clearErrors,
        watch,
        trigger,
        setValue

    } = useForm<TPasswordRecoveryRequest>({
        criteriaMode: 'all',
        shouldFocusError: false
    });

    const [passwordType, setPasswordType] = useState('password');
    const [passwordTypeTwo, setPasswordTypeTwo] = useState('password');
    const isAuth = useAppSelector((state) => state.userSlice.isAuth);
    const [isTotalErrorRedPassword, setIsTotalErrorRedPassword] = useState<boolean | undefined>(false);
    const password = useRef({});
    password.current = watch('password', '');

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

        const request = {...data, code};
        try {
            await passwordRecovery(request).unwrap();
            setIsSuccessMessage(true);

        } catch (error) {
            setIsUnSuccessMessage(true);
            console.log(error);
        }
    };

    if (isAuth) {
        return <Navigate to="/"/>;
    }

    return (
        <AllForm data-test-id='auth'>
            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <FormAllContainerPasswordRecovery data-test-id="reset-password-form"
                                              onSubmit={handleSubmit(onSubmit)}>
                <LabelText
                    variantText="large24">Восстановление пароля</LabelText>
                <FormContainerAuth>
                    <TextFields errorForStyle={errors.password}>
                        <InputStyles
                            errorBorder={errors.password}
                            error={errors}
                            type={passwordType}
                            id="password"
                            aria-invalid={errors.password ? 'true' : 'false'}
                            {...register('password', {
                                required: true,
                                validate: {
                                    checkLength: (value) => value.length >= 8,
                                    matchLetterPattern: (value) => /[A-ZА-ЯЁ]/.test(value),
                                    matchNumberPattern: (value) => /\d/.test(value)
                                }
                            })}
                            onClick={() => {
                                if (errors.password) {
                                    setIsTotalErrorRedPassword(false);
                                    clearErrors('password');
                                }
                            }}
                            onBlur={async () => {
                                setIsTotalErrorRedPassword(true);
                                await trigger('password');
                                const {error: userPasswordError} = getFieldState('password');
                                if ((!userPasswordError)) {
                                    setIsTotalErrorRedPassword(false);
                                }
                            }}
                            onChange={async (event) => {
                                if (!errors.password) {
                                    setIsTotalErrorRedPassword(false);
                                }
                                setValue('password', event.currentTarget.value);
                                await trigger('password');
                            }}
                            placeholder="Пароль"/>
                        <LabelBox htmlFor="password">Новый пароль</LabelBox>
                        <img src={checkPassword} alt="" data-test-id="checkmark"/>
                        <button
                            type="button"
                            onClick={togglePassword}>
                            {
                                passwordType === 'password' ?
                                    <EyeClosed data-test-id="eye-closed"/>
                                    :
                                    <Eye data-test-id="eye-opened"/>
                            }
                        </button>
                        {
                            isTotalErrorRedPassword ?
                                <AssistiveTextBoxStepOne
                                    isTotalErrorRedPassword={isTotalErrorRedPassword}>
                                    <AssistiveTextError data-test-id="hint">
                                        Пароль не менее 8 символов, с заглавной буквой и цифрой
                                    </AssistiveTextError>
                                </AssistiveTextBoxStepOne>
                                :
                                <AssistiveTextBoxStepOne>
                                    <AssistiveText data-test-id="hint">
                                        Пароль {
                                        errors?.password?.types?.checkLength ? <AssistiveTextError>
                                                не менее 8 символов
                                            </AssistiveTextError>
                                            : <AssistiveText>
                                                не менее 8 символов
                                            </AssistiveText>
                                    }
                                        , с {errors?.password?.types?.matchLetterPattern ?
                                        <AssistiveTextError>
                                            заглавной буквой
                                        </AssistiveTextError> : <AssistiveText>
                                            заглавной буквой
                                        </AssistiveText>
                                    } и {errors?.password?.types?.matchNumberPattern ?
                                        <AssistiveTextError>
                                            цифрой
                                        </AssistiveTextError> : <AssistiveText>
                                            цифрой
                                        </AssistiveText>
                                    }
                                    </AssistiveText>
                                </AssistiveTextBoxStepOne>
                        }
                    </TextFields>
                    <TextFields>
                        <InputStyles
                            onFocusCapture={event => {
                                event.stopPropagation();
                                event.preventDefault();
                            }}
                            errorBorder={errors.passwordConfirmation}
                            type={passwordTypeTwo}
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
                                validate: value => value === password.current,
                            })}
                            onBlur={async () => {
                                await trigger('passwordConfirmation');
                            }}
                            placeholder="passwordConfirmation"/>
                        <LabelBox htmlFor="passwordConfirmation">Повторите пароль</LabelBox>
                        <button
                            type="button"
                            onClick={togglePasswordTwo}>
                            {
                                passwordTypeTwo === 'password' ?
                                    <EyeClosed data-test-id="eye-closed"/>
                                    :
                                    <Eye data-test-id="eye-opened"/>
                            }
                        </button>
                        <AssistiveTextBox>
                            {
                                errors.passwordConfirmation
                                    ?
                                    <AssistiveTextError data-test-id="hint">
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
                            errors.passwordConfirmation ?
                                <ButtonComponent
                                    disabled={true}
                                    error={errors}
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
                                variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>После
                                сохранения войдите в библиотеку,
                                используя новый пароль</LabelText>
                        </BottomFrame>
                    </ButtonAndBottomFrame>
                </FormContainerAuth>
            </FormAllContainerPasswordRecovery>
        </AllForm>
    );
};
