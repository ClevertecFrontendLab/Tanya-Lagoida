import React, {useState} from 'react';

import {ButtonComponent} from '../../components/button/button-component';
import {TBooks, TFeedback} from '../../constants/constants-book';
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

type TProps = {
    book?: TBooks
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
                rating={book?.rating}
                isReviewsOpen={isReviewsOpen}
                cover={book?.cover}>
                <LabelText variantText="medium18">Отзывы</LabelText>
                <ReviewsAmount>
                    <LabelText variantText="medium14">{book?.feedbacks?.length}</LabelText>
                </ReviewsAmount>
                <HideReviewsImg
                    rating={book?.rating}
                    isReviewsOpen={isReviewsOpen}
                    src={hideReviews} alt=""
                    onClick={handleHideReviews}
                    cover={book?.cover}
                    data-test-id="button-hide-reviews"/>
            </CommonContainerReviews>
            <ReviewsBlockContainer isReviewsOpen={isReviewsOpen}>
                {book?.feedbacks?.map((f: TFeedback) =>
                    <ReviewsBlock key={f.id}>
                        <ReviewsBlockInformation>
                            <UserPhoto src={f.userPhoto} alt=""/>
                            <RightBlockUserName>
                                <UserNameAndData>
                                    <LabelText
                                        variantText={isMobileView ? 'medium15' : 'medium16LH24'}>{f.userName}</LabelText>
                                </UserNameAndData>
                                <UserNameAndData>
                                    <LabelText
                                        variantText={isMobileView ? 'medium15' : 'medium16LH24'}>{f.data}</LabelText>
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
                        <ReviewsText feedbackText={f.feedbackText}>
                            <LabelText
                                variantText={isMobileView ? 'medium15' : 'medium16LH24'}>{f.feedbackText}</LabelText>
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

