import React, {useState} from 'react';

import {ButtonComponent} from '../../components/button/button-component';
import {useMediaQuery} from '../../hooks/use-media-query';
import starWithoutColor from '../../images/icon_star-without-color.png';
import hideReviews from '../../images/stroke-black.svg';
import starImg from '../../images/icon-star-yellow.png';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';
import {StarComponent} from '../stars/star-component';

import {
    ButtonReviewsContainer, CommonContainerReviews, HideReviewsImg,
    ReviewsAmount, ReviewsBlock, ReviewsBlockContainer,
    ReviewsBlockInformation,
    ReviewsContainer, ReviewsText, RightBlockUserName, StarsBox, UserNameAndData,
    UserPhoto,
} from './styles';
import {TBooksByIdType} from '../../../services/book-service-types';
import {EEndPoints} from '../../../config/endpoints';

type TProps = {
    book?: TBooksByIdType
}
export const Reviews: React.FC<TProps> = ({book}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isTabletView = useMediaQuery(`${device.tablet}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);

    const [isReviewsOpen, setReviewsOpen] = useState<boolean>(true);
    const handleHideReviews = () => {
        setReviewsOpen((previousValue) => !previousValue);
    };

    return (
        <ReviewsContainer>
            <CommonContainerReviews
                comments={book?.comments}
                isReviewsOpen={isReviewsOpen}>
                <LabelText variantText="medium18">Отзывы</LabelText>
                <ReviewsAmount>
                    <LabelText variantText="medium14">{book?.comments?.length}</LabelText>
                </ReviewsAmount>
                <HideReviewsImg
                    comments={book?.comments}
                    isReviewsOpen={isReviewsOpen}
                    src={hideReviews} alt=""
                    onClick={handleHideReviews}
                    data-test-id="button-hide-reviews"/>
            </CommonContainerReviews>
            <ReviewsBlockContainer isReviewsOpen={isReviewsOpen}>
                {book?.comments?.map((comment) =>
                    <ReviewsBlock key={comment.id}>
                        <ReviewsBlockInformation>
                            <UserPhoto src={`${EEndPoints.baseUrl}${comment.user.avatarUrl}`}  alt=""/>
                            <RightBlockUserName>
                                <UserNameAndData>
                                    <LabelText
                                        variantText={isMobileView ? 'medium15' : 'medium16LH24'}>{comment.user.firstName} {comment.user.lastName}</LabelText>
                                </UserNameAndData>
                                <UserNameAndData>
                                    <LabelText
                                        variantText={isMobileView ? 'medium15' : 'medium16LH24'}>{comment.createdAt}</LabelText>
                                </UserNameAndData>
                            </RightBlockUserName>
                        </ReviewsBlockInformation>
                        <StarsBox>
                            <StarComponent src={starImg} width="24px" height="24px" alt=""/>
                            <StarComponent src={starImg} width="24px" height="24px" alt=""/>
                            <StarComponent src={starImg} width="24px" height="24px" alt=""/>
                            <StarComponent src={starImg} width="24px" height="24px" alt=""/>
                            <StarComponent src={starWithoutColor} width="24px" height="24px"
                                           alt=""/>
                        </StarsBox>
                        <ReviewsText text={comment.text}>
                            <LabelText
                                variantText={isMobileView ? 'medium15' : 'medium16LH24'}>{comment.text}</LabelText>
                        </ReviewsText>
                    </ReviewsBlock>
                )}
            </ReviewsBlockContainer>
            <ButtonReviewsContainer>
                <ButtonComponent status="inStock"
                                 width={isLaptopView ? '350px' : isTabletView ? '640px' : '288px'}
                                 height={isMobileView ? '40px' : '52px'}>
                    <LabelText variantText={isMobileView ? 'small500LS' : 'medium16LS'}
                               data-test-id='button-rating' >
                        оценить книгу
                    </LabelText>
                </ButtonComponent>
            </ButtonReviewsContainer>
        </ReviewsContainer>
    );
};
