import styled from 'styled-components';

export const size = {
    mobileS: '320px',
    tablet: '768px',
    laptopL: '1440px',
    mobileMax: '767px'
};

export const device = {
    mobileS: `(max-width: ${size.mobileMax})`,
    tablet: `(min-width: ${size.tablet})`,
    laptopL: `(min-width: ${size.laptopL})`,
};
export const MainStyles = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    : last-child {
    justify-items: end;
}
    @media screen and ${device.mobileS} {
        padding-top: 0;
        width: ${size.mobileS};
    }
    @media screen and ${device.tablet} {
        padding-top: 0;
        width: ${size.tablet};
    }
    @media screen and ${device.laptopL} {
        padding-top: 32px;
        width: ${size.laptopL};
    }
`;

export const Center = styled.div`
    @media screen and ${device.mobileS} {
        display: flex;
        padding: 8px 0 62px 0;
    }
    @media screen and ${device.tablet} {
        display: flex;
        padding: 32px 0 62px 0;
    }
    @media screen and ${device.laptopL} {
        display: flex;
        flex-direction: row;
        gap: 6px;
        padding: 62px 0;
    }
`;
export const BlockNavigationAndContent = styled.section`
    @media screen and ${device.mobileS} {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    @media screen and ${device.tablet} {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    @media screen and ${device.laptopL} {
        display: flex;
        flex-direction: column;
        gap: 32px;


    }
`;
