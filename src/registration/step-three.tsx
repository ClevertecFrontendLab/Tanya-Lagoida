import React from 'react';

import {NavLink} from 'react-router-dom';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {
    AssistiveText,
    AssistiveTextBoxStepOne, AssistiveTextError, BottomFrame, FormContainer,
    InputStyles,
    LabelBox, Registration,
    TextFields
} from '../authorization/styles';
import {ButtonAndBottomFrameRegistration, MaskedInputStyles, TitleForm} from './styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';

import {EColors} from '../pages/themes/themes';
import {Arrow} from '../pages/images/arrow';

type TFormComponentTypes = {
    isError: any
    error: any
    registration: any
    setIsSuccessMessage: any
    setIsUnSuccessMessage: any
    setIsUnSuccessMessageSameLogin: any
    setState: any
    stepRegistration: number
    state: { email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null } | undefined
}

export const StepThree: React.FC<TFormComponentTypes> = ({
    stepRegistration,
    isError, error,
    registration,
    state,
    setIsSuccessMessage,
    setIsUnSuccessMessage,
    setIsUnSuccessMessageSameLogin,
    setState
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const {
        register,
        control,
        handleSubmit,
        clearErrors,
        getValues,
        formState: {isDirty, isValid, errors}
    } = useForm<{ phone: string, email: string }>({
        mode: 'onBlur',
        shouldFocusError: false,
        criteriaMode: 'all'
    });

    const setMessage = () => {
        if (error && error.status === 400) {
            setIsUnSuccessMessageSameLogin(true);
        } else setIsUnSuccessMessage(true);
    };

    const onSubmit: SubmitHandler<{ phone: string, email: string }> = async (data) => {
        const phone = getValues('phone');
        const email = getValues('email');
        console.log(phone);
        console.log(email);
        setState({...state, phone, email});

        const requestData = {...state, ...data};
        try {
            await registration(requestData).unwrap();
            setIsSuccessMessage(true);

        } catch (error) {
            console.log(error);
            setMessage();
        }
    };


    console.log(errors);
    console.log(state);


    // const inputRef = useRef(null);
    // const phone = register('phone');
    // const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmit)} data-test-id="register-form">
            <TitleForm>
                <LabelText
                    variantText="large24">Регистрация
                </LabelText>
                <LabelText
                    variantText="medium14Bold">{stepRegistration} шаг из 3
                </LabelText>
            </TitleForm>
            <TextFields>
                <Controller
                    name="phone"
                    control={control}
                    render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                        <MaskedInputStyles
                            mask="+375 (99) 999-99-99"
                            inputMode="tel"
                            maskChar="x"
                            placeholder="Номер телефона"
                            id="phone"
                            errorborder={errors.phone}
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            onClick={() => {
                                if (errors.phone) {
                                    clearErrors('phone');
                                }
                            }}

                            // onChange={onChange}
                            // onBlur={onBlur}

                            // ref={ref}
                            // inputRef={ref}


                            // inputRef={register('phone',{
                            //         required: true,
                            //     validate: {
                            //         phonePattern: (value) => /^\+375\s(25|29|44|33)\s\d{3}-\d{2}-\d{2}$/.test(value)
                            //     },
                            //     // pattern:  /^\+375\s(25|29|44|33)\s\d{3}-\d{2}-\d{2}$/gmui
                            //
                            //     }
                            //
                            // ).ref}

                            {...register('phone', {
                                    required: true,

                                    // validate: {
                                    //     phonePattern: (value) => /^\+375\s\(25|29|44|33\)\s\d\d\d-\d\d-\d\d$/gmui.test(value)
                                    // }
                                    pattern: /^\+375\s\((25|29|44|33)\)\s\d\d\d-\d\d-\d\d$/gmui
                                }
                            )}
                        />
                    )}
                />

                <LabelBox htmlFor="phone"> Номер телефона</LabelBox>
                <AssistiveTextBoxStepOne>
                    {
                        errors.phone?.type === 'required' ?
                            <AssistiveTextError data-test-id="hint">
                                Поле не может быть пустым
                            </AssistiveTextError>
                            :
                            errors.phone ?
                                <AssistiveTextError data-test-id="hint">
                                    В формате +375 (xx) xxx-xx-xx
                                </AssistiveTextError>
                                :
                                <AssistiveText data-test-id="hint">
                                    В формате +375 (xx) xxx-xx-xx
                                </AssistiveText>
                    }
                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields>
                <InputStyles
                    onClick={() => {
                        if (errors.email) {
                            clearErrors('email');
                        }
                    }}
                    errorBorder={errors.email}
                    id="email"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    {...register('email', {
                        required: true,
                        pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
                    })}
                    placeholder="E-mail"/>
                <LabelBox htmlFor="email">E-mail</LabelBox>

                <AssistiveTextBoxStepOne>
                    {
                        errors.email?.type === 'required' ?
                            <AssistiveTextError data-test-id="hint">
                                Поле не может быть пустым
                            </AssistiveTextError>
                            :
                            errors.email ?
                                <AssistiveTextError data-test-id="hint">Введите корректный e-mail
                                </AssistiveTextError> :
                                <AssistiveText data-test-id="hint">Введите корректный e-mail
                                </AssistiveText>
                    }

                </AssistiveTextBoxStepOne>
            </TextFields>
            <ButtonAndBottomFrameRegistration>
                {
                    errors.phone || errors.email ?
                        <ButtonComponent
                            disabled={true}
                            error={errors}
                            type="submit"
                            height={isMobileView ? '40px' : '52px'}
                            width={isMobileView ? '255px' : '416px'}
                            status="inStock"><LabelText
                            variantText={isMobileView ? 'smallLS' : 'medium16LS'}>зарегистрироваться</LabelText>
                        </ButtonComponent>
                        :
                        <ButtonComponent
                            type="submit"
                            height={isMobileView ? '40px' : '52px'}
                            width={isMobileView ? '255px' : '416px'}
                            status="inStock"><LabelText
                            variantText={isMobileView ? 'smallLS' : 'medium16LS'}>зарегистрироваться</LabelText>
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
