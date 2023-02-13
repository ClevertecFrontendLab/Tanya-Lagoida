import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
import starWithoutColor from '../../images/icon_star-without-color.png';
import starImg from '../../images/icon-star-yellow.png';
import { LabelText } from '../../labels/labels';
import {device} from '../../main/styles';
import {StarComponent} from '../stars/star-component';

import {
    AmountBox,
    LabelRatingContainer,
    RatingContainer, StarsBox,
    StarsContainer,
} from './styles';
import {TBooksByIdType} from '../../../services/book-service-types';

type TProps = {
    book?: TBooksByIdType
}


export const Rating: React.FC<TProps> = ({book}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);

    return (
    <RatingContainer>
        <LabelRatingContainer>
            <LabelText variantText={ isMobileView || isLaptopView  ? 'medium18LS' : 'medium16Bold'}>
                Рейтинг
            </LabelText>
        </LabelRatingContainer>
        <StarsContainer>
            <StarsBox>



                <StarComponent src={starImg} width={isMobileView ? '34px' : '24px'} height={isMobileView ? '34px' : '24px'}  alt=''/>
                <StarComponent src={starImg} width={isMobileView ? '34px' : '24px'} height={isMobileView ? '34px' : '24px'}  alt=''/>
                <StarComponent src={starImg} width={isMobileView ? '34px' : '24px'} height={isMobileView ? '34px' : '24px'}  alt=''/>
                <StarComponent src={starWithoutColor} width={isMobileView ? '34px' : '24px'} height={isMobileView ? '34px' : '24px'}  alt=''/>
            </StarsBox>

            <AmountBox rating={book?.rating} >
                <LabelText variantText='medium18LS'>
                    {book?.rating ?
                        4.3
                        : <LabelText variantText='medium14Norm'> ещё нет оценок </LabelText>}
                </LabelText>
            </AmountBox>

        </StarsContainer>
    </RatingContainer>)
}

