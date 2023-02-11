import styled from 'styled-components';

import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';

export const CommonContainer = styled.div`
    @media screen and ${device.mobileS} {
        width: 288px;
        height: 36px;
        margin-bottom: 8px;
        overflow-block: visible;
        overflow-y: hidden;
        //display: inline-block;
        white-space: normal;
    }
    @media screen and ${device.tablet} {
        width: 305px;
        height: 40px;
        margin-bottom: 16px;
    }
    @media screen and ${device.laptopL} {
        width: 350px;
        height: 44px;
        margin-bottom: 16px;
    }

    border: none;
    border-bottom: 1px solid ${EColors.GreyBox};

`;

export const DetailedInformationContainer = styled.div`
    @media screen and ${device.mobileS} {
        //width: 288px;
        //    height: 396px;
        margin: 24px 0 42px 0;
        align-self: center;
    }
    @media screen and ${device.tablet} {
        width: 640px;
        height: 266px;
        margin: 52px 0;
        align-self: center;
    }
    @media screen and ${device.laptopL} {
        width: 1110px;
        height: 244px;
        margin: 62px 0 62px 0;
        align-self: start;
    }

`;
export const TablesContainer = styled.div`
    @media screen and ${device.mobileS} {
        display: flex;
        flex-direction: column;
    }
    @media screen and ${device.tablet}, ${device.laptopL} {
        display: flex;
        justify-content: space-between;
    }


`;
export const Table1 = styled.table`
    border: none;
    @media screen and ${device.tablet} {
        height: 154px;
    }
`;
export const TH1 = styled.th`
    color: ${EColors.Grey};
    text-align: left;
    vertical-align: top;
    @media screen and ${device.mobileS} {
        width: 129px;
        padding: 0 0 12px 0;
    }
    @media screen and ${device.tablet} {
        width: 138px;
        padding: 0 0 14px 0;
    }
    @media screen and ${device.laptopL} {
        width: 190px;
        padding: 0 0 15px 0;
    }
`;
export const TH2 = styled.th`
    text-align: left;
    vertical-align: top;
    @media screen and ${device.mobileS} {
        width: 159px;
        padding: 0 0 12px 0;
    }
    @media screen and ${device.tablet} {
        width: 167px;
        padding: 0 0 14px 0;
    }
    @media screen and ${device.laptopL} {
        width: 285px;
        padding: 0 0 15px 0;
    }
`;
export const TH3 = styled.th`
    text-align: left;
    vertical-align: top;
    color: ${EColors.Grey};
    @media screen and ${device.mobileS} {
        width: 129px;
        padding: 0 0 12px 0;
    }
    @media screen and ${device.tablet} {
        width: 138px;
        padding: 0 0 16px 0;
    }
    @media screen and ${device.laptopL} {
        width: 190px;
        padding: 0 0 15px 0;
    }
`;
export const TH4 = styled.th`
    text-align: left;
    vertical-align: top;
    @media screen and ${device.mobileS} {
        width: 159px;
        padding: 0 0 12px 0;
    }
    @media screen and ${device.tablet} {
        width: 167px;
        padding: 0 0 20px 0;
    }
    @media screen and ${device.laptopL} {
        width: 445px;
        padding: 0 0 15px 0;
    }
`;
export const Table2 = styled.table`
    border: none;
    @media screen and ${device.tablet} {
        height: 210px;
    }
    @media screen and ${device.laptopL} {
        height: 170px;
    }
`;
