import styled from 'styled-components';
import InputMask from 'react-input-mask';
import {FieldError} from 'react-hook-form';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';
import {device} from '../pages/main/styles';
import {
    ButtonAndBottomFrame,
    InputStyles
} from '../authorization/styles';
import {EColors} from '../pages/themes/themes';
import {IsError400} from '../func/isError400';

export const RegistrationContainer = styled.div`
    gap: 46px;
    @media screen and ${device.mobileS} {
        gap: 8px;
    }
`;
export const FormRegistrationAllContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -264px;
    width: 528px;
    --height: -492px;
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
        --height: -464px;
        padding: 24px 16px;
    }
`;
export const TitleForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const ButtonAndBottomFrameRegistration = styled(ButtonAndBottomFrame)`
    margin-top: 36px;
    @media screen and ${device.mobileS} {
        margin-top: 24px;
    }
`
export const InputStylesSteps = styled(InputStyles)<{errors?: FetchBaseQueryError | SerializedError | undefined, errorBorder?: FieldError, isTotalErrorRed?: boolean}>`
    border-bottom: ${(props) => (props.errors && IsError400) || props.errorBorder || props.isTotalErrorRed ? `1px solid ${EColors.RedError}` : `1px solid ${EColors.GreyBorder}`};
    z-index: -1;
`
export const MaskedInputStyles = styled(InputMask)<{errorborder?: FieldError}>`
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
    border-bottom: ${(props) => props.errorborder ? `1px solid ${EColors.RedError}` : `1px solid ${EColors.GreyBorder}`};
    @media screen and ${device.mobileS} {
        width: 256px;
    }
`
