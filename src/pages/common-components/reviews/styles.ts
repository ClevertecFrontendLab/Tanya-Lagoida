import styled from 'styled-components';

import {TBooks, TFeedback} from '../../constants/constants-book';
import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';

export const ReviewsContainer = styled.div`
    @media screen and ${device.mobileS} {
        align-self: center;
        width: 288px;
    }
    @media screen and ${device.tablet} {
        width: 640px;
        align-self: center;
    }
    @media screen and ${device.laptopL} {
        width: 730px;
        align-self: start;
    }
    display: flex;
    flex-direction: column;

`;
export const ReviewsBlockInformation = styled.div`
    @media screen and ${device.mobileS} {
        display: flex;
        gap: 18px;
        margin-bottom: 8px;
        align-items: center;
    }
    @media screen and ${device.tablet}{
        display: flex;
        gap: 24px;
        align-items: center;
        margin-bottom: 16px;
    }
    @media screen and ${device.laptopL} {
        display: flex;
        gap: 24px;
        align-items: center;
        margin-bottom: 16px;
    }


`;
export const ReviewsAmount = styled.div<TFeedback>`

        margin-left: 6px;
        color: ${EColors.Grey};
        display: inline-block;


`;
export const ButtonReviewsContainer = styled.div`
    @media screen and ${device.mobileS} {
        margin: 20px 0;
    }
    @media screen and ${device.tablet}, ${device.laptopL} {
        margin: 42px 0;
    }
        // @media screen and ${device.laptopL} {
    //  margin: 42px 0;
    // }

`;
export const UserPhoto = styled.img`
    width: 32px;
    height: 32px;
`;
export const UserNameAndData = styled.span`
    color: ${EColors.DarkGrey};
`;
export const ReviewsBlock = styled.div`
    display: flex;
    flex-direction: column;
`;
export const ReviewsText = styled.div<TFeedback>`
    @media screen and ${device.mobileS} {
        width: 288px;
        margin-top: ${(props) => props.feedbackText === null ? '0' : '8px'};
    }
    @media screen and ${device.tablet} {
        width: 640px;
        margin-top: ${(props) => props.feedbackText === null ? '0' : '16px'};
    }
    @media screen and ${device.laptopL} {
        width: 730px;
        margin-top: ${(props) => props.feedbackText === null ? '0' : '16px'};
    }

`;
export const ReviewsBlockContainer = styled.div<{isReviewsOpen: boolean}>`
    @media screen and ${device.mobileS} {
        gap: 32px;
    }
    @media screen and ${device.tablet}, ${device.laptopL} {
        gap: 42px;
    }
    display: ${(props) => props.isReviewsOpen === false ? 'none' : 'flex'};
    flex-direction: column;
`;
export const StarsBox = styled.div`
    @media screen and ${device.mobileS} {
        gap: 8px;
    }
    @media screen and ${device.tablet}, ${device.laptopL} {
        gap: 12px;
    }
    display: flex;
`;
export const RightBlockUserName = styled.div`
    @media screen and ${device.mobileS} {
        flex-direction: column;
        display: flex;
        gap: 3px;
    }
    @media screen and ${device.tablet}, ${device.laptopL} {
        display: flex;
        gap: 24px;
    }

    //height: 51px;
`;
export const CommonContainerReviews = styled.div<TBooks & {isReviewsOpen: boolean}>`
    border-bottom: 1px solid ${ EColors.GreyBox };
    @media screen and ${device.mobileS} {
        display: flex;
        align-items: start;
        width: 288px;
        height: ${(props) => props.rating === undefined || props.isReviewsOpen === false ? '28px' : '44px'};
        margin-bottom: ${(props) => props.rating === undefined || props.isReviewsOpen === false ? '0' : '8px'};
    }
    @media screen and ${device.tablet} {
        display: flex;
        align-items: start;
        width: 350px;
        height: ${(props) => props.rating === undefined || props.isReviewsOpen === false ? '24' : '40px'};
        margin-bottom: ${(props) => props.rating === undefined || props.isReviewsOpen === false ? '0' : '42px'};
    }
    @media screen and ${device.laptopL} {
        display: flex;
        align-items: start;
        width: 350px;
        height: ${(props) => props.rating === undefined || props.isReviewsOpen === false ? '28px' : '44px'};
        margin-bottom: ${(props) => props.rating === undefined || props.isReviewsOpen === false ? '0' : '16px'};
    }
    border-bottom: ${(props) => props.rating === undefined || props.isReviewsOpen === false ? 'none' : '1px solid EColors.GreyBox'};

`;

export const HideReviewsImg = styled.img<{isReviewsOpen: boolean} & TBooks>`
    display: ${(props) => props.rating === undefined ? 'none' : 'block'};
    transform: ${(props) => props.isReviewsOpen === false ? 'rotate(180deg)' : 'none'};
    cursor: pointer;
    margin-left: 24px;
`
