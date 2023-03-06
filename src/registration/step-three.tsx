import React, {ReactNode} from 'react';

import {NavLink} from 'react-router-dom';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import MaskedInput from 'react-text-mask';
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

import {TRegistrationRequest} from '../services/login-service-types';
import {userReceived} from '../store/auth-slice';
import {useAppDispatch} from '../store/store';
import {EColors} from '../pages/themes/themes';
import {Arrow} from '../pages/images/arrow';

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
        control,
        handleSubmit,
        formState: {isDirty, isValid, errors}
    } = useForm<TRegistrationRequest>({mode: 'onChange', shouldFocusError: false});
    const onSubmit: SubmitHandler<TRegistrationRequest> = async (data) => {
        try {
            const response = await registration(data).unwrap();
            localStorage.setItem('user', JSON.stringify(response.user));
            dispatch(userReceived(response.user));
        } catch (error) {
            console.log(error);
        }
    };
    console.log(errors);


    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmit)}>

            <TextFields>

                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        required: true,
                        validate: {
                            matchPattern: (value) => /^\+375\s(25|29|44|33)\s\d{3}-\d{2}-\d{2}$/.test(value)
                        }
                    }}
                    render={({field, fieldState: {error}}) => (
                        <MaskedInput
                            mask={['+', '3', '7', '5', ' ', '(', /[2-4]/, /[3-5,9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                            value={field.value}
                            onChange={field.onChange}
                        >
                            {(inputProps: any) => (<InputStyles
                            {...inputProps}
                                type="text"
                                />


                            )}
                        </MaskedInput>
                    )}
                />

                {/*<Controller*/}
                {/*    name="phone"*/}
                {/*    control={control}*/}
                {/*    rules={{*/}
                {/*        required: true,*/}
                {/*            validate: {*/}
                {/*                matchPattern: (value) => /^\+375\s(25|29|44|33)\s\d{3}-\d{2}-\d{2}$/.test(value)*/}
                {/*    }}}*/}
                {/*    render={({ field: {onChange, value} }) => (*/}
                {/*        <MaskedInputStyles*/}
                {/*            mask={['+', '3', '7', '5', ' ', '(', /[2-4]/, /[3-5,9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}*/}
                {/*            placeholderChar=''*/}
                {/*            guide={false}*/}
                {/*            type="text"*/}
                {/*            id="phone"*/}
                {/*            errorborder={errors.phone}*/}
                {/*            onChange={onChange}*/}
                {/*            value={value}*/}
                {/*            placeholder="Номер телефона"*/}
                {/*        />*/}
                {/*    )}*/}
                {/*/>*/}


                {/*<Controller*/}
                {/*    name="phone"*/}
                {/*    control={control}*/}
                {/*    rules={{*/}
                {/*        required: true,*/}
                {/*        validate: {*/}
                {/*            matchPattern: (value) => /^\+375\s(25|29|44|33)\s\d{3}-\d{2}-\d{2}$/.test(value)*/}
                {/*        }*/}
                {/*    }}*/}
                {/*    render={({field: {}}) =>*/}
                {/*        <MaskedInputStyles*/}
                {/*            mask={['+', '3', '7', '5', ' ', '(', /[2-4]/, /[3-5,9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}*/}
                {/*            placeholderChar=""*/}
                {/*            guide={false}*/}
                {/*            type="text"*/}
                {/*            id="phone"*/}
                {/*            errorborder={errors.phone}*/}
                {/*            placeholder="Номер телефона"*/}
                {/*        >*/}
                {/*            {(inputProps: any) => (*/}
                {/*                <input*/}
                {/*                    {...inputProps}*/}
                {/*                    ref={register}*/}
                {/*                    type="text"*/}
                {/*                    placeholder="Номер телефона"*/}
                {/*                />*/}
                {/*            )}*/}
                {/*        </MaskedInputStyles>*/}
                {/*    }*/}

                {/*/>*/}


                {/*<MaskedInputStyles*/}
                {/*    mask={['+','3','7','5',' ','(',/[2-4]/,/[3-5,9]/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,'-',/\d/,/\d/]}*/}
                {/*    guide={false}*/}
                {/*    errorborder={errors.phone}*/}
                {/*    type="text"*/}
                {/*    id="phone"*/}
                {/*    {...register('phone', {*/}
                {/*        required: true,*/}
                {/*        validate: {*/}
                {/*            matchPattern: (value) => /^\+375\s(25|29|44|33)\s\d{3}-\d{2}-\d{2}$/.test(value)*/}
                {/*        }*/}
                {/*    })}*/}
                {/*    placeholder="Номер телефона"/>*/}
                <LabelBox htmlFor="phone">Номер телефона</LabelBox>
                <AssistiveTextBoxStepOne>
                    {
                        errors?.phone?.types?.matchPattern ?
                            // errors?.phone?.types?.matchPattern && errors.phone.types.required ?
                            <AssistiveTextError>
                                В формате +375 (xx) xxx-xx-xx
                            </AssistiveTextError>
                            :
                            <AssistiveText>
                                В формате +375 (xx) xxx-xx-xx
                            </AssistiveText>
                    }
                </AssistiveTextBoxStepOne>
            </TextFields>
            <TextFields>
                <InputStyles
                    errorBorder={errors.email}
                    type="email"
                    id="email"
                    {...register('email', {
                        required: true,
                        pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i
                    })}
                    placeholder="E-mail"/>
                <LabelBox htmlFor="email">E-mail</LabelBox>

                <AssistiveTextBoxStepOne>
                    {
                        errors.email ? <AssistiveTextError>Введите корректный e-mail
                            </AssistiveTextError> :
                            <AssistiveText>Введите корректный e-mail
                            </AssistiveText>
                    }

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
                            <Arrow stroke={EColors.Inherit}/>
                        </Registration>
                    </NavLink>
                </BottomFrame>
            </ButtonAndBottomFrameRegistration>
        </FormContainer>
    );
};
