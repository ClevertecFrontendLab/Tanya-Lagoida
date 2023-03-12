// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import {ButtonComponent} from '../pages/components/button/button-component';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {LabelText} from '../pages/labels/labels';
import {device} from '../pages/main/styles';

import {BlockContainerOne} from './errors-container-styles';
import {
    AllForm,
    HeaderLogin,
} from './styles';

export const ErrorsContainer = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <AllForm data-test-id="auth">
                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <BlockContainerOne data-test-id='status-block'>
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
                </BlockContainerOne>
        </AllForm>
    );
};
