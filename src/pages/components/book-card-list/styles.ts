import styled from 'styled-components';

import {TBooks} from '../../constants/constants-book';
import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';
import {TBooksType} from '../../../services/book-service-types';

export const ContainerListView = styled.article`
    box-shadow: 0 2px 4px ${EColors.GreyShadow1}, 0 3px 4px ${EColors.GreyShadow2}, 0 1px 5px ${EColors.GreyShadow3};
    @media screen and ${device.mobileS} {
        width: 288px;
        min-height: 146px;
        border-radius: 10px;
        gap: 8px;
        display: flex;
        padding: 16px 16px 16px 8px;
    }
    @media screen and ${device.tablet} {
        width: 640px;
        //max-height: 240px;
        min-width: 204px;
        border-radius: 12px;
        gap: 16px;
        display: flex;
        padding: 16px 24px 16px 16px;
    }
    @media screen and ${device.laptopL} {
        width: 825px;
        height: 202px;
        border-radius: 12px;
        gap: 16px;
        display: flex;
        padding: 16px 24px 16px 16px;
    }
`;
export const BookCoverListViewContainer = styled.div`
    border-radius: 3px;
    border: 1px solid ${EColors.Grey};
    align-items: center;
    overflow: hidden;
    justify-content: center;
    display: flex;
    background-color: ${EColors.LightGrey};
    @media screen and ${device.mobileS} {
        height: 100px;
        width: 70px;
    }
    @media screen and ${device.tablet} {
        height: 172px;
        width: 120px;
    }
    @media screen and ${device.laptopL} {
        height: 170px;
        width: 120px;
    }
`;
export const RightContainerList = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-items: start;
    @media screen and ${device.mobileS} {
        gap: 3px;
    }
    @media screen and ${device.tablet} {
        gap: 16px;
    }
    @media screen and ${device.laptopL} {
        gap: 24px;
    }
`;
export const NameList = styled.div`
    justify-self: start;
    @media screen and ${device.mobileS} {
        display: flex;
        flex-direction: column;
        gap: 3px;
        width: 186px;

    }
    @media screen and ${device.tablet} {
        display: flex;
        flex-direction: column;
        width: 464px;
        gap: 16px;

    }
    @media screen and ${device.laptopL} {
        width: 649px;
        display: flex;
        max-height: 96px;
        flex-direction: column;
        gap: 8px;
    }

`;
export const BookNameBlockList = styled.div`
    @media screen and ${device.mobileS} {
        max-height: 54px;
        overflow: hidden;
        text-overflow: ellipsis;
        //display: -webkit-box;
        //-webkit-line-clamp: 3;
        //-webkit-box-orient: vertical;
    }
    @media screen and ${device.tablet} {
        max-height: 152px;
    }
    @media screen and ${device.laptopL} {
        max-height: 92px;

    }
`;
export const BookAuthorBlockList = styled.div`
    color: ${EColors.DarkGrey};
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and ${device.mobileS} {
        max-height: 54px;

    }
    @media screen and ${device.tablet} {
        height: 24px;
    }
    @media screen and ${device.laptopL} {
        height: 24px;
    }
`;
export const RatingAndButtonList = styled.div`
    @media screen and ${device.mobileS} {
        height: 72px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        justify-items: start;
    }
    @media screen and ${device.tablet} {
        height: 40px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
    @media screen and ${device.laptopL} {
        height: 40px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
`;

export const ImgContainerList = styled.img<TBooksType>`
    width: ${(props) => props.image === undefined ? '32px' : 'inherit'};
    height: ${(props) => props.image === undefined ? '32px' : 'inherit'};
`;
