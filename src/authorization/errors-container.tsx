import React from 'react';
import {LabelText} from '../pages/labels/labels';
import {
    AllForm,
    HeaderLogin,
} from './styles';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import {BlockContainerOne} from './errors-container-styles';
import {ButtonComponent} from '../pages/components/button/button-component';

type TErrorsType = {
    title: string
    text: string
    textButton: string
}

export const ErrorsContainer: React.FC<TErrorsType> = ({title, textButton, text}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <AllForm>

                <HeaderLogin>
                    <LabelText
                        variantText={isMobileView ? 'medium18LS' : 'large'}>Cleverland</LabelText>
                </HeaderLogin>
                <BlockContainerOne>
                    <LabelText variantText={isMobileView ? 'medium18LS' : 'large24'}>{title}</LabelText>
                    <div>
                        <LabelText variantText={isMobileView ? 'medium15LH' : 'medium16LH24'}>{text}</LabelText>
                    </div>
                    <ButtonComponent
                        height={isMobileView ? '40px' : '52px'}
                        width={isMobileView ? '256px' : '410px'}
                        status="inStock"><LabelText
                        variantText={isMobileView ? 'smallLS' : 'medium16LS'}>{textButton}</LabelText>
                    </ButtonComponent>
                </BlockContainerOne>


        </AllForm>
    );
};
