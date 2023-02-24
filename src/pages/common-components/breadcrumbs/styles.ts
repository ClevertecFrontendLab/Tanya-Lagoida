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
        min-height: 56px;
        max-height: 92px;
        width: 320px;
        margin: 8px 0 20px 0;
        padding-left: 16px;
    }
    @media screen and ${device.tablet} {
        min-height: 64px;
        max-height: 88px;
        width: 768px;
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
export const Container = styled.div`
    vertical-align: middle;
    display: table-cell;
`;
export const ChevronContainer = styled.span`
    padding: 0 12px;
`;
export const CategoryContainer = styled.span`
    cursor: pointer;
`;



