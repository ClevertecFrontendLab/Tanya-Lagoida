import styled from 'styled-components';

import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';

export const ContainerTableView = styled.article`
    box-shadow: 0 2px 4px ${EColors.GreyShadow1}, 0 3px 4px ${EColors.GreyShadow2}, 0 1px 5px ${EColors.GreyShadow3};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 470px;
    @media screen and ${device.mobileS} {
        width: 288px;
        padding: 8px 16px 16px 16px;
    }
    @media screen and ${device.tablet} {
        width: 190px;
        padding: 8px 8px 16px 8px;
    }
    @media screen and ${device.laptopL} {
        width: 190px;
        padding: 8px 8px 16px 8px;
    }
`;
export const BookCoverContainer = styled.div`
    align-self: center;
    display: flex;
    align-items: center;
    //justify-content: start;
    width: 174px;
    height: 242px;
    border-radius: 10px;
    border: 1px solid ${EColors.Grey};
    box-sizing: border-box;
    overflow: hidden;
    background-color: ${EColors.LightGrey};
    //margin-bottom: 16px;
    position: relative;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
`;
export const Name = styled.div`
    @media screen and ${device.mobileS} {
        height: 98px;
        margin: 16px 0 10px 0;
        gap: 8px;
        justify-items: start;
    }
    @media screen and ${device.tablet} {
        height: 71px;
        margin: 25px 0 28px 0;
        gap: 17px;
    }
    @media screen and ${device.laptopL} {
        height: 89px;
        margin: 16px 0 19px 0;
        gap: 0;
        justify-items: center;
    }
    flex-direction: column;
    display: flex;
`;
export const BookNameBlockContainer = styled.div`
    flex-direction: column;
    display: flex;
    @media screen and ${device.mobileS} {
        justify-content: start;
        height: 54px;
    }
    @media screen and ${device.tablet} {
        justify-content: start;
        height: 36px;
    }
    @media screen and ${device.laptopL} {
        justify-content: center;
        height: 54px;
`;
export const BookNameBlock = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    @media screen and  ${device.mobileS} {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    @media screen and ${device.tablet} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    @media screen and ${device.laptopL} {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        vertical-align: middle;
    }
`;
export const EnteredText = styled.span`
    color: ${EColors.CommonText};
`;
export const BookAuthorBlock = styled.div`
    color: ${EColors.DarkGrey};
    @media screen and ${device.mobileS} {
        text-transform: none;
    }
    @media screen and ${device.tablet} {
        text-transform: uppercase;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    @media screen and ${device.laptopL} {
        text-transform: none;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
export const BookAuthorBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and ${device.mobileS} {
        height: 36px;
    }
    @media screen and ${device.tablet} {
        height: 15px;
    }
    @media screen and ${device.laptopL} {
        height: 36px;
    }
`;
export const ButtonContainer = styled.div`
    align-self: center;
    margin: 0;
`;
export const StarsBoxBookCardTable = styled.div`
    display: flex;
    gap: 6px;
`;
export const StarLabel = styled.div`
    color: ${EColors.Grey};
    height: 24px;
`;
export const NonCategory = styled.div`
    color: ${EColors.Grey};
    width: inherit;
    display: flex;
    justify-content: center;

    @media screen and ${device.mobileS} {
        margin-top: 121px;
        align-items: center;
        justify-content: center;
    }
    @media screen and ${device.tablet} {
        margin-top: 202px;
    }
    @media screen and ${device.laptopL} {
        margin-top: 168px;


    }
`;
