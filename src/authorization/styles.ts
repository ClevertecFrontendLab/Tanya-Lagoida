import styled from 'styled-components';
import {device} from '../pages/main/styles';
import {EColors} from '../pages/themes/themes';

export const FormAllContainer = styled.div`
    width: 528px;
    height: 466px;
    background: ${EColors.White};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 56px;
    gap: 32px;
    @media screen and ${device.mobileS} {
        width: 288px;
        height: 456px;
        padding: 24px 16px;
    }
`;
export const AllForm = styled.div`
    background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
    width: 100vw;
    height: 100vh;
`;
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 59px;
    padding-top: 180px;
    @media screen and ${device.mobileS} {
        gap: 12px;
        padding-top: 16px;
    }
`;
export const HeaderLogin = styled.div`
    color: ${EColors.White};
`;
export const TextFields = styled.div`
    position: relative;
    input::placeholder {
        color: transparent;
    }

    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
        display: block;
        position: absolute;
        top: 6px;
        transition-duration: 500ms;
        color: ${EColors.Grey};
        letter-spacing: 0.2px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
    }

    img {
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 16px;
        width: 24px;
        height: 24px;
    }
`;
export const AssistiveTextBox = styled.div`
    display: flex;
    align-items: start;
    margin: 2px 0 0 12px;
    width: 400px;
    height: 16px;
    @media screen and ${device.mobileS} {
        width: 240px;
    }
`
export const AssistiveTextBoxStepOne = styled(AssistiveTextBox)`

    @media screen and ${device.mobileS} {
        height: 32px;
        margin: 2px 0 -6px 12px;
        display: flex;
        align-items: start;
    }
`
export const AssistiveText = styled.span`
    letter-spacing: 0.2px;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: ${EColors.Grey};
`;
export const AssistiveTextError = styled(AssistiveText)`
    color: ${EColors.RedError};
`;
export const AssistiveTextAllError = styled(AssistiveText)`
    color: ${EColors.Inherit};
`;
export const InputStyles = styled.input<{ error: any }>`
    padding-top: 12px;
    outline: none;
    cursor: pointer;
    padding-left: 12px;
    border: none;
    width: 416px;
    height: 56px;
    background: ${EColors.LightGrey};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: ${(props) => props.error && props.error.status === 400 ? `1px solid ${EColors.RedError}` : `1px solid ${EColors.GreyBorder}`};
    @media screen and ${device.mobileS} {
        width: 256px;
    }

    ::placeholder {
        padding-top: 0;
    }
`;
export const LabelBox = styled.label`
    cursor: pointer;
    display: block;
    position: absolute;
    transition-duration: 500ms;
    left: 12px;
    top: 19px;
    letter-spacing: 0.1px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;

`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const ButtonAndBottomFrame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
`;
export const BottomFrame = styled.div`
    flex-direction: row;
    display: flex;
    gap: 16px;

    span {
        color: ${EColors.Grey};
    }

    @media screen and ${device.mobileS} {
        flex-direction: column;
        gap: 4px;
    }
`;
export const Registration = styled.button`
    display: flex;
    gap: 12px;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;

    span {
        color: ${EColors.Inherit};
        text-transform: uppercase;
    }

    img {
        width: 24px;
        height: 24px;
    }
`;
