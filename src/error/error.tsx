import React from 'react';
import {ErrorContainer, ErrorIconAndText} from './styles';
import warningIcon from '../pages/images/error-icon.svg';
import {LabelText} from '../pages/labels/labels';
import {useMediaQuery} from '../pages/hooks/use-media-query';
import {device} from '../pages/main/styles';
import closeError from '../pages/images/close-error.svg';

export const Error = () => {
    const isLaptopView = useMediaQuery( `${device.laptopL}`);
    return (
        <ErrorContainer data-test-id='error'>
            <ErrorIconAndText>
                <img src={warningIcon} alt=''/>
                <LabelText
                    variantText={isLaptopView  ? 'medium16Bold' : 'medium14Bold'}>
                    Что-то пошло не так. Обновите страницу через некоторое время.
                </LabelText>
            </ErrorIconAndText>
            <img src={closeError} alt=''/>
        </ErrorContainer>
    );
};
