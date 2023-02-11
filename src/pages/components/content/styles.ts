import styled from 'styled-components';

import {device} from '../../main/styles';

export const ContentStylesForDesktopTableView = styled.main`
    display: flex;

    @media screen and ${device.mobileS} {
width: 288px;
        flex-direction: column;
        gap: 16px;
        //margin-bottom: 62px;
    }
    @media screen and ${device.tablet} {
width: 640px;
        gap: 35px;
        row-gap: 32px;
        flex-wrap: wrap;
        flex-direction: row;
    }
    @media screen and ${device.laptopL} {
        width: 824.5px;
        flex-wrap: wrap;
        gap: 21.5px;
        row-gap: 24px;
        flex-direction: row;
        margin-bottom: 0;
    }
`
export const ContentStylesForDesktopListView = styled.main`
        display: flex;
        flex-direction: column;
        gap: 16px;
`
