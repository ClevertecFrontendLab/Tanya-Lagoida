import styled from 'styled-components';
import {device} from '../pages/main/styles';
import {
    ButtonAndBottomFrame,
    FormAllContainer,
    InputStyles
} from '../authorization/styles';
import {EColors} from '../pages/themes/themes';
import InputMask from 'react-input-mask';

export const RegistrationContainer = styled.div`
    gap: 46px;
    @media screen and ${device.mobileS} {
        gap: 8px;
    }
`;
export const FormRegistrationAllContainer = styled(FormAllContainer)`
    height: 492px;
    @media screen and ${device.mobileS} {
        height: 464px;
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
export const InputStylesSteps = styled(InputStyles)<{errors?: any, errorBorder?: any}>`
    border-bottom: ${(props) => (props.errors && props.errors.status === 400) || props.errorBorder ? `1px solid ${EColors.RedError}` : `1px solid ${EColors.GreyBorder}`};
    z-index: -1;

`
export const MaskedInputStyles = styled(InputMask)<{errorborder?: any}>`
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
