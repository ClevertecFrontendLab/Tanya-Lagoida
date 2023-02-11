import styled from 'styled-components';

import { device } from '../../main/styles';
import { EColors } from '../../themes/themes';

export const AboutBookTop = styled.div`
    border: none;
    border-bottom: 1px solid ${EColors.GreyBox};

@media screen and ${device.mobileS} {
    width: 209px;
    height: 36px;
    margin-bottom: 8px;
}
@media screen and ${device.tablet}{
    width: 350px;
    height: 40px;
    margin-bottom: 16px;
    }
@media screen and ${device.laptopL} {
    width: 350px;
    height: 44px;
    margin-bottom: 16px;
}
`;
export const AboutBookText = styled.div`

` ;

export const AboutBookContainer = styled.div`
@media screen and ${device.mobileS} {
    //height: 296px;
    //width: 288px;
    white-space: normal;
    br {
        display: none;
    }
    }

@media screen and ${device.tablet} {

    //height: 296px;
    //width: 640px;
    }

    @media screen and ${device.laptopL} {
    //height: 300px;
    width: 635px;
    }

`;
