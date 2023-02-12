import styled from 'styled-components';

import { device } from '../../main/styles';
import { EColors } from '../../themes/themes';

export const RatingContainer = styled.div`

@media screen and ${device.mobileS} {
     width: 288px;
    max-height: 104px;
    align-self: center;
    }
    @media screen and ${device.tablet} {
     width: 640px;
    height: 84px;
        align-self: center;
    }
    @media screen and ${device.laptopL} {
    width: 350px;
    height: 88px;
        align-self: start;
    }
`;
export const LabelRatingContainer = styled.div`
@media screen and ${device.mobileS} {
height: 36px;
width: 288px;
margin-bottom: 8px;
    }
 @media screen and ${device.tablet} {
height: 40px;
width: 305px;
margin-bottom: 16px;
    }
    @media screen and ${device.laptopL} {
height: 44px;
width: 350px;
margin-bottom: 16px;
    }
    border: none;
    border-bottom: 1px solid ${EColors.GreyBox};

`;
export const StarsContainer = styled.div`

    display: flex;
    @media screen and ${device.mobileS} {
     //flex-direction: column;
        flex-wrap: wrap;
        //gap: 24px;
        align-items: center;
    }
    @media screen and ${device.tablet} {
        align-items: center;
    }
    @media screen and ${device.laptopL} {
        align-items: center;
    }
    //margin-top: 16px;
`;
export const StarsBox = styled.div`
    display: flex;
    gap: 12px;
`;
export const AmountBox = styled.div<{rating?: number}>`
    @media screen and ${device.mobileS} {
        padding-left: ${(props) => props.rating ? '24px' : '0'} ;
    }
    @media screen and ${device.tablet} {
        padding-left: 24px;
    }
    @media screen and ${device.laptopL} {
        padding-left: 24px;
    }

`
