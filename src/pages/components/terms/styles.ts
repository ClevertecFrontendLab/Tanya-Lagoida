import styled from 'styled-components';

import {device} from '../../main/styles';

export const Container = styled.div`
    @media screen and ${device.mobileS} {
        width: 288px;
        padding-top: 14px;

    }
    @media screen and ${device.tablet} {
        width: 640px;
    }
    @media screen and ${device.laptopL} {
        width: 825px;
    }



`;
export const Caption = styled.header`
    @media screen and ${device.mobileS} {
        margin-bottom: 24px;


    }
    @media screen and ${device.tablet} {
        margin-bottom: 32px;
    }
    @media screen and ${device.laptopL} {
        margin-bottom: 32px;
    }
`;
export const ContextContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;
export const Context = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Head = styled.div`
`
export const Paragraph = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const Subparagraph = styled.div`
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const Subsubparagraph = styled.div`
    margin-left: 90px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`
