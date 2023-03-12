import React, {useState} from 'react';

import {SubmitHandler, useForm} from 'react-hook-form';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError, FetchBaseQueryMeta,
    MutationDefinition
} from '@reduxjs/toolkit/query';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {Navigate, NavLink, useNavigate} from 'react-router-dom';
import {SerializedError} from '@reduxjs/toolkit';
import {
    AllForm,
    AssistiveText,
    AssistiveTextAllError, AssistiveTextBox, AssistiveTextError,
    BottomFrame,
    ButtonAndBottomFrame,
    FormAllContainer,
    FormContainerAuth,
    HeaderLogin,
    InputStyles,
    LabelBox,
    Registration,
    TextFields
} from './styles';
import {LabelText} from '../pages/labels/labels';
import {ButtonComponent} from '../pages/components/button/button-component';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {TAuthorizationRequest, TAuthorizationResponse} from '../services/login-service-types';
import {userReceived} from '../store/auth-slice';
import {useAppDispatch, useAppSelector} from '../store/store';
import {EColors} from '../pages/themes/themes';
import {Arrow} from '../pages/images/arrow';
import {ErrorsContainer} from './errors-container';
import {EyeClosed} from '../pages/images/eye-closed';
import {Eye} from '../pages/images/eye';
import {IsError400} from '../func/is-error400';

type TFormComponentTypes = {
    'data-test-id'?: string
    error: FetchBaseQueryError | SerializedError | undefined
    authorization: MutationTrigger<MutationDefinition<TAuthorizationRequest, BaseQueryFn<string | FetchArgs, unknown,
        FetchBaseQueryError, { shout?: boolean }, FetchBaseQueryMeta>, never, TAuthorizationResponse, 'userApi'>>
}

export const FormAuthorizationComponent: React.FC<TFormComponentTypes> = ({
    authorization,
    error
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {
        register,
        clearErrors,
        trigger,
        formState: {errors},
        getValues,
        getFieldState,
        handleSubmit,
    } = useForm<TAuthorizationRequest>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        shouldFocusError: false
    });
    const dispatch = useAppDispatch();
    const [passwordType, setPasswordType] = useState('password');
    const navigate = useNavigate();
    const isAuth = useAppSelector((state) => state.userSlice.isAuth);
    const [isButtonEyeVisible, setIsButtonEyeVisible] = useState<boolean>(false);

    const togglePassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else if (passwordType === 'text') {
            setPasswordType('password');
        }
    };

    const onSubmit: SubmitHandler<TAuthorizationRequest> = async (data) => {
        try {
            const response = await authorization(data).unwrap();

            localStorage.setItem('token', JSON.stringify(response.jwt));
            localStorage.setItem('user', JSON.stringify(response.user));
            navigate('/');
            dispatch(userReceived({user: response.user, isAuth: true}));
        } catch (errorResponse) {
            // error
        }
    };
    if (error) {

        if (!IsError400(error)) return <ErrorsContainer/>;
    }

    if (isAuth) {
        return <Navigate to="/"/>;
    }
    console.log(isButtonEyeVisible);

    return (
        <AllForm data-test-id="auth">
            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <FormAllContainer data-test-id="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <LabelText
                    variantText="large24">Bход в личный кабинет</LabelText>
                <FormContainerAuth>
                    <TextFields>
                        <InputStyles
                            type="text"
                            id="identifier"
                            {...register('identifier', {required: true})}
                            onClick={() => {
                                if (errors.identifier) {
                                    clearErrors('identifier');
                                }
                            }}
                            error={errors.identifier}
                            placeholder="Логин"/>
                        <LabelBox htmlFor="identifier">Логин</LabelBox>
                        <AssistiveTextBox>
                            {errors.identifier ?
                                <AssistiveTextError>
                                    <LabelText variantText="small500" data-test-id="hint">Поле не
                                        может быть пустым
                                    </LabelText>
                                </AssistiveTextError>
                                : null
                            }
                        </AssistiveTextBox>
                    </TextFields>
                    <TextFields>
                        <InputStyles
                            type={passwordType}
                            id="password" {...register('password', {required: true})}
                            onClick={async () => {
                                setIsButtonEyeVisible(true);
                                await trigger('password');
                                const {error: passwordError} = getFieldState('password');
                                if (passwordError) {
                                    clearErrors('password');
                                }
                            }}
                            onBlur={async () => {
                                await trigger('password');
                                if (!getValues('password')) {

                                    setIsButtonEyeVisible(false);
                                }
                            }}
                            error={errors.password}
                            placeholder="Пароль"/>
                        <LabelBox htmlFor="password">Пароль</LabelBox>
                        {
                            isButtonEyeVisible &&
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
                        }

                        <AssistiveTextBox>
                            {error && IsError400(error)
                                ? <AssistiveTextError>
                                    <LabelText variantText="small500" data-test-id="hint">Неверный
                                        логин или
                                        пароль!</LabelText>
                                </AssistiveTextError>
                                : errors.password
                                    ?
                                    <AssistiveTextError>
                                        <LabelText variantText="small500" data-test-id="hint">Поле
                                            не может быть пустым
                                        </LabelText>
                                    </AssistiveTextError>
                                    : null
                            }
                        </AssistiveTextBox>
                        <AssistiveTextBox>
                            {error && IsError400(error)
                                ? <NavLink to="/forgot-pass">
                                    <AssistiveTextAllError>
                                        <LabelText variantText="small500">Восстановить?</LabelText>
                                    </AssistiveTextAllError>
                                </NavLink>
                                :
                                <NavLink to="/forgot-pass">
                                    <AssistiveText>
                                        Забыли логин или пароль?
                                    </AssistiveText>
                                </NavLink>
                            }
                        </AssistiveTextBox>
                    </TextFields>
                    <ButtonAndBottomFrame>
                        {
                            errors.password || errors.identifier ?
                                <ButtonComponent
                                    disabled={true}
                                    error={errors}
                                    type="submit"
                                    height={isMobileView ? '40px' : '52px'}
                                    width={isMobileView ? '255px' : '416px'}
                                    status="default">
                                    вход
                                </ButtonComponent>
                                :
                                <ButtonComponent
                                    type="submit"
                                    height={isMobileView ? '40px' : '52px'}
                                    width={isMobileView ? '255px' : '416px'}
                                    status="default">
                                    вход
                                </ButtonComponent>
                        }

                        <BottomFrame>
                            <LabelText
                                variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Нет
                                учётной записи?</LabelText>
                            <NavLink to="/registration">
                                <Registration>
                                    <LabelText variantText="smallLS">Регистрация</LabelText>
                                    <Arrow stroke={EColors.Inherit}/>
                                </Registration>
                            </NavLink>
                        </BottomFrame>
                    </ButtonAndBottomFrame>
                </FormContainerAuth>
            </FormAllContainer>
        </AllForm>
    );
};
