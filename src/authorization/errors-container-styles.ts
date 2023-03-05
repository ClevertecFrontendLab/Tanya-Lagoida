import styled from 'styled-components';
import {device} from '../pages/main/styles';
import {EColors} from '../pages/themes/themes';

export const BlockContainerOne = styled.div`
    position: absolute;
    width: 600px;
    --height: -266px;
    padding: 48px 95px;
    background: ${EColors.White};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    left: 50%;
    margin-left: -300px;
    top: 50%;
    margin-top: calc(var(--height) / 2);
    @media screen and ${device.mobileS} {
        margin-left: -144px;
        width: 288px;
        --height: -230px;
        padding: 42px 16px 32px 16px;
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
export const MessageContainerBox = styled(BlockContainerOne)`
    --height: -206px;
    padding: 48px 92px;
    div {
        flex-direction: column;
        display: flex;
    }
    span {
        justify-self: center;
        align-self: center;
        text-align: center;
    }
    @media screen and ${device.mobileS} {
      --height: -186px;
        padding: 42px 16px 32px 16px;
    }
`
