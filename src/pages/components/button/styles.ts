import styled from 'styled-components';

import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';

import {TButtonProps} from './button-component';
import {iconButtonBackgroundColors, TViewButtonProps} from './view-icon-button';

export const Button = styled.button<TButtonProps>`
    text-transform: uppercase;
    background: ${props => props.status === 'inStock'
        ? `linear-gradient(231.58deg, ${EColors.Red} -53.35%, ${EColors.Yellow} 297.76%)`
        : props.status === 'booking' ? EColors.White : EColors.LightGrey};
    color: ${props => props.status === 'inStock' ? EColors.White
        : props.status === 'booking' ? EColors.DarkGrey : EColors.Grey};
    border-radius: 30px;
    border: 1px solid ${EColors.GreyBorder};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${props => props.status === 'inStock' && 'none'};
`;

export const ViewIconButtonStyles = styled.button<TViewButtonProps & { isSearchInputOpen?: boolean, isDefaultSort?: boolean }>`
    background: ${({variantOfIcons}) => iconButtonBackgroundColors[variantOfIcons]};
    filter: drop-shadow(0px 2px 4px ${EColors.GreyShadow1}) drop-shadow(0px 3px 4px ${EColors.GreyShadow2}) drop-shadow(0px 1px 5px ${EColors.GreyShadow3});
    border-radius: 19px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and ${device.mobileS} {
        width: 32px;
        height: 32px;
        cursor: pointer;
        transform: ${(props) => props.isDefaultSort === true ? 'none' : 'scale(1,-1)'};
        display: ${(props) => props.isSearchInputOpen ? 'none' : 'flex'};
    }
    @media screen and ${device.tablet} {
        width: 38px;
        height: 38px;
    }
    @media screen and ${device.laptopL} {
        width: 38px;
        height: 38px;
    }
    cursor: pointer;


`;

