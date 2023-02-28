import React from 'react';
import {useForm, SubmitHandler } from 'react-hook-form';
import {
    AllForm,
    AssistiveText, AssistiveTextAll,
    BottomFrame,
    ButtonAndBottomFrame,
    FormAllContainer,
    FormContainer,
    HeaderLogin,
    InputStyles, LabelBox,
    LoginContainer, Registration,
    TextFields
} from './styles';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import arrow from '../pages/images/arrow.svg';
import {useAuthorizationMutation} from '../services/login-service';
import {TAuthorizationRequest, } from '../services/login-service-types';
import {Loader} from '../loader/loader';

export const LoginToPersonalAccount = () => {
    const [authorization, {isLoading, isError, error}] = useAuthorizationMutation();

    const {control, register, handleSubmit} = useForm<TAuthorizationRequest>();
    const onSubmit: SubmitHandler<TAuthorizationRequest> = async (data) => {
        try {
            const response = await authorization(data).unwrap()
            console.log(response);

        } catch (error) {
            console.log(error);


        }


    }
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    if (isLoading) {
        return <Loader />
    }

    return (
        <AllForm>
            <LoginContainer>
                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <FormAllContainer>
                    <LabelText variantText="large24">Вход в личный кабинет</LabelText>
                    <FormContainer onSubmit={handleSubmit(onSubmit)}>
                        <TextFields>
                            <InputStyles {...register('identifier', {required: true})}  />
                            <LabelBox htmlFor="identifier">Логин</LabelBox>
                            <AssistiveText/>
                        </TextFields>
                        <TextFields>
                            <InputStyles  {...register('password', {required: true})}  />
                            <LabelBox htmlFor="password">Пароль</LabelBox>
                            <AssistiveText/>
                            <AssistiveTextAll>
                                <LabelText variantText="small500">Забыли логин или пароль?</LabelText>
                            </AssistiveTextAll>
                        </TextFields>
                        <ButtonAndBottomFrame>
                            <ButtonComponent
                                type="submit"
                                height={isMobileView ? '40px' : '52px'}
                                width={isMobileView ? '255px' : '416px'}
                                status="inStock"><LabelText
                                variantText={isMobileView ? 'smallLS' : 'medium16LS'}>вход</LabelText>
                            </ButtonComponent>
                            <BottomFrame>
                                <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Нет
                                    учётной записи?</LabelText>
                                <Registration>
                                    <LabelText variantText="smallLS">Регистрация</LabelText>
                                    <img src={arrow} alt=""/>
                                </Registration>
                            </BottomFrame>
                        </ButtonAndBottomFrame>
                    </FormContainer>
                </FormAllContainer>
            </LoginContainer>
        </AllForm>
    );
};
