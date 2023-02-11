import styled from 'styled-components';

import {TBooks} from '../../constants/constants-book';
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
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
`;
export const ImgContainer = styled.img<TBooks>`
    width: ${(props) => props.cover === undefined ? '48px' : 'inherit'};
    height: ${(props) => props.cover === undefined ? '48px' : 'inherit'};
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
export const BookNameBlock = styled.div`
    //text-overflow: ellipsis;
    overflow: hidden;
   @media screen and  ${device.mobileS} {
        max-height: 54px;
       display: -webkit-box;
       -webkit-line-clamp: 3;
       -webkit-box-orient: vertical;
    }
    @media screen and ${device.tablet} {
        height: 36px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    @media screen and ${device.laptopL} {
        height: 54px;
            //display: -webkit-box;
            //-webkit-line-clamp: 3;
            //-webkit-box-orient: vertical;
        display: flex;
        span{
        align-self: center;
        }
    }
`;
export const BookAuthorBlock = styled.div`
    color: ${EColors.DarkGrey};

    @media screen and ${device.mobileS} {
        text-transform: none;
        max-height: 36px;
    }
    @media screen and ${device.tablet} {
        height: 15px;
        text-transform: uppercase;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media screen and ${device.laptopL} {
        display: flex;
        align-items: center;
        text-transform: none;
        height: 36px;
`;
export const ButtonContainer = styled.div`
    align-self: center;
    margin: 0;
`;
export const StarsBoxBookCardTable = styled.div`
    display: flex;
    gap: 6px;
`
export const StarLabel = styled.div`
    color: ${EColors.Grey};
    height: 24px;
`

