import React from 'react';

import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError, FetchBaseQueryMeta,
    MutationDefinition
} from '@reduxjs/toolkit/query';
import {MutationTrigger} from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {AllForm, HeaderLogin} from '../authorization/styles';
import {MessageContainerBox} from '../authorization/errors-container-styles';
import {IsError400} from '../func/is-error400';
import {TAuthorizationResponse, TRegistrationRequest} from '../services/login-service-types';

type TPropsTypes = {
    registration: MutationTrigger<MutationDefinition<TRegistrationRequest, BaseQueryFn<string | FetchArgs, unknown,
        FetchBaseQueryError, { shout?: boolean }, FetchBaseQueryMeta>, never, TAuthorizationResponse, 'userApi'>>
    setIsSuccessMessage?: (value: boolean) => void
    setIsUnSuccessMessage?: (value: boolean) => void
    setIsUnSuccessMessageSameLogin?: (value: boolean) => void
    state: { email: string | null, username: string | null, password: string | null, firstName: string | null, lastName: string | null, phone: string | null }
    }

export const RegistrationUnsuccessfulMessage: React.FC<TPropsTypes> = ({
    state,
    registration,
    setIsUnSuccessMessage,
    setIsUnSuccessMessageSameLogin,
    setIsSuccessMessage,
}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    const setMessage = (error: unknown) => {
        if (error && IsError400(error)) {
            if (setIsUnSuccessMessageSameLogin) {
                setIsUnSuccessMessageSameLogin(true);
            }
        } else if (setIsUnSuccessMessage) {
            setIsUnSuccessMessage(true);
        }
    }

    const onSubmit = async () => {

        try {
            await registration(state).unwrap();
            if (setIsSuccessMessage) {
                setIsSuccessMessage(true);
            }

        } catch (error) {
            setMessage(error)
        }
    };

    return (
        <AllForm data-test-id="auth">
            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <MessageContainerBox data-test-id='status-block'>
                <LabelText variantText={isMobileView ? 'medium18LS' : 'large24'}>Данные не
                    сохранились</LabelText>
                <div>
                    <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Что-то
                        пошло не так и ваша регистрация не завершилась. Попробуйте ещё
                        раз</LabelText>
                </div>
                <ButtonComponent
                    onClick={onSubmit}
                    height={isMobileView ? '40px' : '52px'}
                    width={isMobileView ? '256px' : '410px'}
                    status="inStock"><LabelText
                    variantText={isMobileView ? 'smallLS' : 'medium16LS'}>повторить</LabelText>
                </ButtonComponent>
            </MessageContainerBox>
        </AllForm>
    );
};
