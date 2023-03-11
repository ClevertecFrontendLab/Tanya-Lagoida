import styled from 'styled-components';
import {EColors} from '../pages/themes/themes';
import {
    AssistiveTextBox,
    ButtonAndBottomFrame,
    FormAllContainer,
    FormContainer, FormContainerAuth,
} from '../authorization/styles';
import {device} from '../pages/main/styles';

export const LoginToPersonalAccount = styled.div`
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    height: 64px;
    background: ${EColors.LightGrey};
    width: 528px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${EColors.DarkGrey};
    padding-left: 16px;
    @media screen and ${device.mobileS} {
       width: 288px;
    }
    svg {
        transform: rotate(180deg);
        width: 24px;
        height: 24px;
    }
`
export const FormAllContainerPasswordRecovery = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -264px;
    width: 528px;
    background: ${EColors.White};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    --height: -490px;
    padding: 48px 56px;
    margin-top: calc(var(--height) / 2);
    @media screen and ${device.mobileS} {
        --height: -480px;
        padding: 24px 16px;
        margin-left: -144px;
        width: 288px;
    }
`
export const FormAllContainerPasswordReset = styled(FormAllContainerPasswordRecovery)`
    padding: 0 0 48px;
    height: 422px;
    @media screen and ${device.mobileS} {
        height: 458px;
    }

`
export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 56px;
    gap: 32px;
    @media screen and ${device.mobileS} {
        padding: 0 16px;
        gap: 20px;
    }
`
export const FormContainerReset = styled(FormContainerAuth)`
    gap: 32px;
    @media screen and ${device.mobileS} {
        gap: 20px;
    }
`
export const AssistiveTextBoxReset = styled(AssistiveTextBox)`
    height: 32px;
    @media screen and ${device.mobileS} {
        height: 48px;
    }
`
export const ButtonAndBottomFrameReset = styled(ButtonAndBottomFrame)`
    margin-top: 0;
`
