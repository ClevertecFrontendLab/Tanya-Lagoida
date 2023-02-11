import styled from 'styled-components';

import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';

export const BreadcrumbsStyles = styled.div`
    color: ${EColors.Grey};
    background-color: ${EColors.LightGrey};
    border: none;
    display: flex;
    align-items: center;
    //display: table-cell;
    //vertical-align: middle;

    @media screen and ${device.mobileS} {
        height: 92px;
        width: inherit;
        margin: 8px 0 20px 0;
        padding-left: 16px;
    }
    @media screen and ${device.tablet} {
        height: 88px;
        width: inherit;
        margin: 22px 0 48px 0;
        padding-left: 64px;
    }
    @media screen and ${device.laptopL} {
        height: 64px;
        width: 1440px;
        margin: 42px 0;
        padding-left: 165px;
    }

`;
export const ContainerForChevron = styled.img`
    width: 9px;
    height: 18px;
    margin: 0 12px;
    display: inline-block;
`;
export const Container = styled.div`
    vertical-align: middle;
    display: table-cell;
`
