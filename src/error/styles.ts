import styled from 'styled-components';
import {device} from '../pages/main/styles';
import {EColors} from '../pages/themes/themes';

export const ErrorContainer = styled.div`
    z-index: 10;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    background: ${EColors.ErrorBack};
    border: 1.5px solid ${EColors.RedError};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and ${device.mobileS} {
        width: 280px;
        height: 78px;
        align-items: start;
        top: 56px;
        padding: 12px 16px;
        img{
            width: 16px;
            height: 16px;
        }
        label{
            width: 186px;
        }
    }
    @media screen and ${device.tablet} {
        width: 640px;
        height: 72px;
        align-items: center;
        top: 62px;
        padding: 24px 16px;
        img{
            width: 16px;
            height: 16px;
        }
    }
    @media screen and ${device.laptopL} {
        width: 1110px;
        height: 80px;
        padding: 24px 32px;
        align-items: center;
        top: 64px;
        img{
            width: 24px;
            height: 24px;
        }
    }
`
export const ErrorIconAndText = styled.div`
    display: flex;
    @media screen and ${device.mobileS} {
        gap: 12px;
    }
    @media screen and ${device.tablet} {
        gap: 12px;
    }
    @media screen and ${device.laptopL} {
        gap: 24px;
    }

`
