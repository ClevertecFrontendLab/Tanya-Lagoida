import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
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
                {
                    book?.rating ?
                        <StarComponent rating={book?.rating} width={isMobileView ? '34px' : '24px'} height={isMobileView ? '34px' : '24px'}  alt=''/>   : null
                }

            </StarsBox>

            <AmountBox rating={book?.rating} >
                <LabelText variantText='medium18LS'>
                    {book?.rating ?
                        book.rating
                        : <LabelText variantText='medium14Norm'> ещё нет оценок </LabelText>}
                </LabelText>
            </AmountBox>

        </StarsContainer>
    </RatingContainer>)
}

