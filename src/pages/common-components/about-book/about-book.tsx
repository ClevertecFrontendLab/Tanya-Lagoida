import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {AboutBookContainer, AboutBookText, AboutBookTop} from './styles';
import {TBooksByIdType} from '../../../services/book-service-types';

type TProps = {
    book?: TBooksByIdType
}

export const AboutBook: React.FC<TProps> = ({book}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);

    return (
    <AboutBookContainer>
        <AboutBookTop>
            <LabelText variantText={ isMobileView || isLaptopView  ? 'medium18' : 'medium16Bold'}>О книге</LabelText>
        </AboutBookTop>
        <AboutBookText>
            <LabelText  variantText={isMobileView ? 'smallNorm' : 'medium16LH24'}>
                {book?.description}
            </LabelText>
        </AboutBookText>
    </AboutBookContainer>
)
}

