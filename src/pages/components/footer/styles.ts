import styled from 'styled-components';

import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';

export const FooterStyles = styled.footer`
    border-top: 1px solid ${EColors.GreyBorder};
    display: flex;
    @media screen and ${device.mobileS} {
        gap: 16px;
        height: 104px;
        width: 288px;
        flex-direction: column;
        align-items: center;
        justify-self: end;
        justify-content: center;
    }
    @media screen and ${device.tablet} {
        gap:0;
        height: 56px;
        width: 640px;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        justify-items: center;
        justify-self: end;
    }
    @media screen and ${device.laptopL} {
        gap:0;
        height: 56px;
        width: 1110px;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        justify-items: center;
        justify-self: end;
    }
`;
export const FooterText = styled.div`

    @media screen and ${device.mobileS} {
        width: 200px;
        //height: 40px;
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-items: center;



    }
    @media screen and ${device.tablet} {
        width: 386px;
        margin-top: 0;
        display: flex;
        align-items: center;
    }
    @media screen and ${device.laptopL} {
        width: 386px;
        margin-top: 0;
    }
`;
export const IconsContainer = styled.div`
    width: 168px;
    height: 24px;
    display: flex;
    justify-content: space-between;

`;
export const IconSocial = styled.img`
    height: 24px;
    width: 24px;
`;
