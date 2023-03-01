import React from 'react';
import {LabelText} from '../pages/labels/labels';
import {
    AllForm,
    HeaderLogin,
    LoginContainer,
} from './styles';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {BlockContainer} from './login-failed-styles';
import {ButtonComponent} from '../pages/components/button/button-component';

export const LoginFailed = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <AllForm>
            <LoginContainer>
                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <BlockContainer>
                    <LabelText variantText={isMobileView ? 'medium18LS' : 'large24'}>Вход не выполнен</LabelText>
                    <div>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Что-то пошло не так. Попробуйте ещё раз</LabelText>
                    </div>


                    <ButtonComponent
                        height={isMobileView ? '40px' : '52px'}
                        width={isMobileView ? '256px' : '410px'}
                        status="inStock"><LabelText
                        variantText={isMobileView ? 'smallLS' : 'medium16LS'}>повторить</LabelText>
                    </ButtonComponent>


                </BlockContainer>
            </LoginContainer>
        </AllForm>
    );
};
