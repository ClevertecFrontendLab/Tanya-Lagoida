import React, {useState} from 'react';

import {ButtonComponent} from '../../components/button/button-component';
import {useMediaQuery} from '../../hooks/use-media-query';
import hideReviews from '../../images/stroke-black.svg';
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
import withoutCover from '../../images/icon-without-cover.svg';
import {dateFuncReviews} from '../../../func/date-func-rewiews';

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
                            {
                               comment.user.avatarUrl ?
                                   <UserPhoto src={`${EEndPoints.baseUrl}${comment.user.avatarUrl}`}  alt=""/>
                                   : <UserPhoto src={withoutCover} alt='' />
                            }
                            <RightBlockUserName>
                                <UserNameAndData>
                                    <LabelText
                                        variantText={isMobileView ? 'medium15' : 'medium16LH24'}>{comment.user.firstName} {comment.user.lastName}</LabelText>
                                </UserNameAndData>
                                <UserNameAndData>
                                    <LabelText
                                        variantText={isMobileView ? 'medium15' : 'medium16LH24'}>{dateFuncReviews(comment.createdAt)}</LabelText>
                                </UserNameAndData>
                            </RightBlockUserName>
                        </ReviewsBlockInformation>
                        <StarsBox>
                            {
                                comment.rating ?
                                    <StarComponent
                                        rating={comment?.rating}
                                        width={isMobileView ? '34px' : '24px'}
                                        height={isMobileView ? '34px' : '24px'}
                                        alt=''/>   : null
                            }

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
