import styled from 'styled-components';
import {device} from '../pages/main/styles';
import {ButtonAndBottomFrame, FormAllContainer, LoginContainer} from '../authorization/styles';
import {EColors} from '../pages/themes/themes';

export const RegistrationContainer = styled(LoginContainer)`
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