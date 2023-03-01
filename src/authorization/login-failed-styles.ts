import styled from 'styled-components';
import {device} from '../pages/main/styles';
import {EColors} from '../pages/themes/themes';

export const BlockContainer = styled.div`
    width: 600px;
    height: 266px;
    padding: 48px 95px;
    background: ${EColors.White};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    gap: 32px;
    align-items: center;
    @media screen and ${device.mobileS} {
        width: 288px;
        height: 230px;
        padding: 42px 16px 32px 16px;
        margin-top: 113px;
        gap: 24px;
        align-items: center;
        div {
            flex-direction: column;
            display: flex;
            width: 256px;
        }
        span {
            justify-self: center;
            align-self: center;
            text-align: center;
        }
    }

`
