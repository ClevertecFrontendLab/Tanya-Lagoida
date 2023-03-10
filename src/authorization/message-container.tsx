import React from 'react';
import {LabelText} from '../pages/labels/labels';
import {
    AllForm,
    HeaderLogin,
} from './styles';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {MessageContainerBox} from './errors-container-styles';

type TErrorsType = {
    title: string
    text: string
}

export const MessageContainer: React.FC<TErrorsType> = ({title, text}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <AllForm>
                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <MessageContainerBox data-test-id='status-block'>
                    <LabelText variantText={isMobileView ? 'medium18LS' : 'large24'}>{title}</LabelText>
                    <div>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>{text}</LabelText>
                    </div>
                </MessageContainerBox>
        </AllForm>
    );
};
