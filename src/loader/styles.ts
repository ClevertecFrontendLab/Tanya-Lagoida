import styled from 'styled-components';
import {EColors} from '../pages/themes/themes';
import {device} from '../pages/main/styles';

export const LoaderContainer = styled.div`
    background-color: ${EColors.Blur};
    z-index: 5;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    img {
        animation: rotation 1s infinite linear;
        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(359deg);
            }
        }
        @media screen and ${device.mobileS} {
            width: 22px;
            height: 22px;
        }
        @media screen and ${device.tablet} {
            width: 44px;
            height: 44px;
        }
        @media screen and ${device.laptopL} {
            width: 70px;
            height: 68px;
        }
    }
`
