import styled from 'styled-components';

import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';

export const MenuStyles = styled.aside`
    @media screen and ${device.mobileS} {
        width: 224px;
    }
    @media screen and  ${device.tablet} {
        width: 0;
    }
    @media screen and  ${device.laptopL} {
        display: block;
        width: 279px;
        height: 824px;
    }
`;
export const ShowcaseBooksBox = styled.div<{ isActive: boolean }>`
@media screen and ${device.mobileS} {
margin-left: 16px;
    }
    @media screen and  ${device.tablet} {
       margin-left: 32px;
    }
    @media screen and  ${device.laptopL} {
 margin-left: 0;
    }
    cursor: pointer;
    display: flex;
    gap: 82px;
    width: 255px;
    vertical-align: top;
     color: ${(props) => props.isActive ? 'transparent' : EColors.Inherit};
    background: ${(props) => props.isActive ? `linear-gradient(231.58deg, ${EColors.Red} -53.35%, ${EColors.Yellow} 297.76%)` : EColors.Inherit};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 8px;
    border-bottom: ${(props) => props.isActive ? '1px solid' : 'none'};
    border-image: ${(props) => props.isActive ? `linear-gradient(231.58deg, ${EColors.Red} -53.35%, ${EColors.Yellow} 297.76%) 1 0` : 'none'};
`;
export const BooksCategoriesContainer = styled.nav<{ isMenuOpen: boolean }>`
    display: ${(props) => props.isMenuOpen === false ? 'none' : 'flex'};
    gap: 14.5px;
    flex-direction: column;
    padding: 16px 0 0 24px;
    @media screen and ${device.mobileS} {
margin-left: 16px;
width: 265px;
    }
    @media screen and  ${device.tablet} {
       margin-left: 32px;
       width: 275px;
    }
    @media screen and  ${device.laptopL} {
        margin-left: 0;
        width: 275px;
    }
`;
export const BookCategoriesStyle = styled.span<{ isActive: boolean }>`
    color: ${(props) => props.isActive ? 'transparent' : EColors.Inherit};
    background: ${(props) => props.isActive ? `linear-gradient(231.58deg, ${EColors.Red} -53.35%, ${EColors.Yellow} 297.76%)` : EColors.Inherit};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
export const CategoryAmount = styled.span`
    color: ${EColors.Grey};
    padding-left: 6px;
    margin-top: -5px;
`;

export const RulesAndContract = styled.div<{ isActive: boolean }>`
    padding-top: 42px;
    color: ${(props) => props.isActive ? 'transparent' : EColors.Inherit};
    background: ${(props) => props.isActive ? `linear-gradient(231.58deg, ${EColors.Red} -53.35%, ${EColors.Yellow} 297.76%)` : EColors.Inherit};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    //padding-bottom: 8px;
    width: 255px;
    border-bottom: ${(props) => props.isActive ? '1px solid' : 'none'};
    border-image: ${(props) => props.isActive ? `linear-gradient(231.58deg, ${EColors.Red} -53.35%, ${EColors.Yellow} 297.76%) 1 0` : 'none'};
`;
export const ShowMenu = styled.img<{ isMenuOpen: boolean, isActive: boolean }>`
    transform: ${(props) => props.isMenuOpen === false ? 'none' : 'rotate(180deg)'};
    display: ${(props) => props.isActive ? 'block' : 'none'};
`;
export const ProfileAndExitContainer = styled.div`
    @media screen and ${device.mobileS} {
        display: flex;
        flex-direction: column;
        gap: 42px;
        border-top: 1px solid ${EColors.GreyBorder};
        height: 130px;
        padding: 32px 0 0 0;
        width: 288px;
        span {
        margin-left: 16px;
        }
    }
    @media screen and  ${device.tablet} {
        display: flex;
        flex-direction: column;
        gap: 42px;
        border-top: 1px solid ${EColors.GreyBorder};
        height: 182px;
        padding-top: 32px;
        width: 502px;
        span {
        margin-left: 32px;
        }
    }
    @media screen and  ${device.laptopL} {
        width: 0;
        display: none;
    }
`;
export const MenuContainer = styled.div<{isMenuCollapsed: boolean}>`
    @media screen and ${device.mobileS} {
        width: ${(props) => props.isMenuCollapsed === false ? '288px' : '0'};
        min-height: ${(props) => props.isMenuCollapsed === false ? '442px' : '0'};
        max-height: ${(props) => props.isMenuCollapsed === false ? '1112px' : '0'};
        border-radius: 10px;
        box-shadow: 0 2px 4px ${EColors.GreyShadow1}, 0 3px 4px ${EColors.GreyShadow2}, 0 1px 5px ${EColors.GreyShadow3};
        background: ${EColors.LightGrey};
        display: ${(props) => props.isMenuCollapsed === false ? 'block' : 'none'};
        z-index: 5;
        position: absolute;
        padding: 32px 0 52px 0;
        transform: translateY(33px);
        overflow-y: hidden;
    }
    @media screen and  ${device.tablet} {
        width: ${(props) => props.isMenuCollapsed === false ? '502px' : '0'};
        min-height: ${(props) => props.isMenuCollapsed === false ? '442px' : '0'};
        max-height: ${(props) => props.isMenuCollapsed === false ? '1090px' : '0'};
        border-radius: 10px;
        box-shadow: 0 2px 4px ${EColors.GreyShadow1}, 0 3px 4px ${EColors.GreyShadow2}, 0 1px 5px ${EColors.GreyShadow3};
        background: ${EColors.LightGrey};
        display: ${(props) => props.isMenuCollapsed === false ? 'block' : 'none'};
        z-index: 5;
        position: absolute;
        padding: 32px 0;
        transform: translateY(33px);
    }
    @media screen and  ${device.laptopL} {
        width: 0;
        display: none;
    }
`;
export const MenuTermsContainer = styled.div`
    @media screen and ${device.mobileS} {
        margin: 0 0 52px 16px;
        width: 256px;
    }
    @media screen and  ${device.tablet} {
        margin: 0 0 52px 32px;
    }
    @media screen and  ${device.laptopL} {
        margin: 0;
    }
`;
