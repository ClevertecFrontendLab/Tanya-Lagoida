import styled from 'styled-components';
import {FieldError} from 'react-hook-form';
import {device} from '../pages/main/styles';
import {EColors} from '../pages/themes/themes';
import {IsError400} from '../func/isError400';

export const FormAllContainer = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -264px;
    width: 528px;
    --height: -466px;
    background: ${EColors.White};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 56px;
    gap: 32px;
    margin-top: calc(var(--height) / 2);
    @media screen and ${device.mobileS} {
        margin-left: -144px;
        width: 288px;
        --height: -456px;
        padding: 24px 16px;
    }
`;
export const AllForm = styled.div`
    background: linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%);
    width: 100vw;
    height: 100vh;
    position: relative;
`;
export const HeaderLogin = styled.div`
    color: ${EColors.White};
    position: absolute;
    top: 180px;
    left: 50%;
    margin-left: -90.5px;
    @media screen and ${device.mobileS} {
        top: 16px;
        margin-left: -51px;
    }
`;
export const TextFields = styled.div`
    position: relative;
    input ~ label {
        letter-spacing: 0.1px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
    }
    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
        display: block;
        position: absolute;
        top: 6px;
        left: 12px;
        color: ${EColors.Grey};
        letter-spacing: 0.2px;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
    }
    input:focus::placeholder {
        color: transparent;
    }
    button {
        z-index: 5;
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
        width: 24px;
        height: 24px;
        border: none;
        background: none;
    }
    img {
        z-index: 5;
        position: absolute;
        top: 16px;
        right: 44px;
        width: 24px;
        height: 24px;
    }
`;
export const LabelBox = styled.label`
    display: none;
    letter-spacing: 0.1px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
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
`;
export const AssistiveTextBoxStepOne = styled(AssistiveTextBox)<{ isTotalErrorRedUsername?: boolean | undefined, isTotalErrorRedPassword?: boolean | undefined}>`
    color: ${(props) => props.isTotalErrorRedUsername || props.isTotalErrorRedPassword ? `${EColors.RedError}` : `${EColors.GreyBorder}`};

    @media screen and ${device.mobileS} {
        height: 32px;
        margin: 2px 0 -6px 12px;
        display: flex;
        align-items: start;
    }
`;
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
export const InputStyles = styled.input<{ error?: FieldError, errorBorder?: FieldError }>`
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
    border-bottom: ${(props) => (props.error && IsError400) || props.errorBorder ? `1px solid ${EColors.RedError}` : `1px solid ${EColors.GreyBorder}`};
    @media screen and ${device.mobileS} {
        width: 256px;
    }
`;


export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const FormContainerAuth = styled.div`
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
