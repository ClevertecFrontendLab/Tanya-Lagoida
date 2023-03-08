import React from 'react';

import {NavLink} from 'react-router-dom';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {ButtonComponent} from '../pages/components/button/button-component';
import {AllForm, HeaderLogin} from '../authorization/styles';
import {BlockContainerOne, MessageContainerBox} from '../authorization/errors-container-styles';

export const RegistrationUnsuccessfulMessageSameLogin = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <AllForm>

            <HeaderLogin>
                <LabelText
                    variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
            </HeaderLogin>
            <MessageContainerBox>
                <LabelText variantText={isMobileView ? 'medium18LS' : 'large24'}>Данные не сохранились</LabelText>
                <div>
                    <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail</LabelText>
                </div>
                <NavLink to="/registration">
                    <ButtonComponent
                        height={isMobileView ? '40px' : '52px'}
                        width={isMobileView ? '256px' : '410px'}
                        status="inStock"><LabelText
                        variantText={isMobileView ? 'smallLS' : 'medium16LS'}>назад к регистрации</LabelText>
                    </ButtonComponent>
                </NavLink>
            </MessageContainerBox>
        </AllForm>
    );
};