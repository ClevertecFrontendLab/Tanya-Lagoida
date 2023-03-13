// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import {useMediaQuery} from '../pages/hooks/use-media-query';
import {LabelText} from '../pages/labels/labels';
import {device} from '../pages/main/styles';

import {MessageContainerBox} from './errors-container-styles';
import {
    AllForm,
    HeaderLogin,
} from './styles';

export const MessageContainer = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <AllForm data-test-id="auth">
                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <MessageContainerBox data-test-id='status-block'>
                    <LabelText variantText={isMobileView ? 'medium18LS' : 'large24'}>Письмо выслано</LabelText>
                    <div>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля</LabelText>
                    </div>
                </MessageContainerBox>
        </AllForm>
    );
};
