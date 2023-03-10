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
import {ButtonAndBottomFrameRegistration, MaskedInputStyles} from './styles';
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
    state: { email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null }
}

export const StepThree: React.FC<TFormComponentTypes> = ({
    isError, error,
    registration,
    state,
    setIsSuccessMessage,
    setIsUnSuccessMessage,
    setIsUnSuccessMessageSameLogin,
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const {
        register,
        control,
        handleSubmit,
        formState: {isDirty, isValid, errors}
    } = useForm<{ phone: string, email: string }>({
        mode: 'onBlur',
        shouldFocusError: false,
        criteriaMode: 'all'
    });

    const onSubmit: SubmitHandler<{ phone: string, email: string }> = async (data) => {

        const requestData = {...state, ...data};
        try {
            await registration(requestData).unwrap();
            setIsSuccessMessage(true);

        } catch (error) {
            console.log(error);
            setIsUnSuccessMessageSameLogin(true);
            // if (error && error.status === 400) {
            //     setIsUnSuccessMessageSameLogin(true);
            // } else setIsUnSuccessMessage(true);
        }
    };



    console.log(errors);
    console.log(state);


    // const inputRef = useRef(null);
    // const phone = register('phone');
    // const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmit)}>

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
                        errors.phone ?
                            <AssistiveTextError data-test-id='hint'>
                                В формате +375 (xx) xxx-xx-xx
                            </AssistiveTextError>
                            :
                            <AssistiveText data-test-id='hint'>
                                В формате +375 (xx) xxx-xx-xx
                            </AssistiveText>
                    }
                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields>
                <InputStyles
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
                        errors.email ? <AssistiveTextError data-test-id='hint'>Введите корректный e-mail
                            </AssistiveTextError> :
                            <AssistiveText data-test-id='hint'>Введите корректный e-mail
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
