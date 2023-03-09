import React, { useRef, useState } from 'react';

import { Navigate, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
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
import {FormAllContainerPasswordRecovery,
} from './styles';
import {EyeClosed} from '../pages/images/eye-closed';
import {Eye} from '../pages/images/eye';
import {useAppSelector} from '../store/store';
import checkPassword from '../pages/images/Icon_Other.svg';
import { PasswordRecoverySuccessMessage } from './password-recovery-success-message';
import { PasswordRecoveryUnSuccessMessage } from './password-recovery-unsuccess-message';

type TFormComponentTypes = {
    error?: any
    passwordRecovery?: any
    data?: any
}
type TStateType = {
    passwordConfirmation: string | null
    passwordValue: string | null
}
const InitState = {
    passwordConfirmation: null,
    passwordValue: null
}

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
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
        watch,
        getValues

    } = useForm<TPasswordRecoveryRequest>({ mode: 'onChange', criteriaMode: 'all', shouldFocusError: false});

    const [state, setState] = useState<TStateType>(InitState);
    const passwordConfirmation = getValues('passwordConfirmation');
    const passwordValue = getValues('password');
    // const query = useQuery();
    const location = useLocation();

    const [passwordType, setPasswordType] = useState('password');
    const [passwordTypeTwo, setPasswordTypeTwo] = useState('password');
    const isAuth = useAppSelector((state) => state.userSlice.isAuth);
    const password = useRef({});
    password.current = watch("password", "");

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
    const [searchParams, setSearchParams] = useSearchParams();
    // const code = query.get("code");
    console.log(location);
    const code = searchParams.get("code")
    console.log(code);

    // console.log(query.get("code"));

    const onSubmit: SubmitHandler<TPasswordRecoveryRequest> = async (data) => {
        setState((InitState):TStateType => {
            state.passwordConfirmation = passwordConfirmation
            state.passwordValue = passwordValue
            return state
        })
        const request = {...data, code}
        try {
            await passwordRecovery(request).unwrap();
            return <PasswordRecoverySuccessMessage />
        } catch (error) {
            console.log(error);
        }
    };

    if (isAuth) {
        return <Navigate to="/"/>;
    }

    if (error) {
        return <PasswordRecoverySuccessMessage />
    }

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
                    <TextFields errorForStyle={errors.password}>
                        <InputStyles
                            errorBorder={errors.password}
                            error={errors}
                            type={passwordType}
                            id="password"
                            aria-invalid={errors.password ? 'true' : 'false'}
                            // onClick={() => {
                            //     if (errors.password) {
                            //         clearErrors('password');
                            //     }
                            // }}
                            {...register('password', {
                                required: true,
                                validate: {
                                    checkLength: (value) => value.length >= 8,
                                    matchLetterPattern: (value) => /[A-ZА-ЯЁ]/.test(value),
                                    matchNumberPattern: (value) => /\d/.test(value)
                                }
                            })}
                            placeholder="Пароль"/>
                        <LabelBox htmlFor="password">Новый пароль</LabelBox>
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
                    <TextFields>
                        <InputStyles
                            onFocusCapture={event => {
                                event.stopPropagation();
                                event.preventDefault()
                            }}
                            errorBorder={errors.passwordConfirmation}
                            type={passwordTypeTwo}
                            id="passwordConfirmation"
                            aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
                            onClick ={() => {
                                if (errors.passwordConfirmation) {
                                    clearErrors('passwordConfirmation');
                                }
                            }}
                            {...register('passwordConfirmation', {
                                required: true,
                                minLength: 8,
                                validate: value => value === password.current,
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
                            errors.passwordConfirmation ?
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
