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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    @media screen and ${device.mobileS} {
        width: ${size.mobileS};
    }
    @media screen and ${device.tablet} {
        width: ${size.tablet};
    }
    @media screen and ${device.laptopL} {
        width: ${size.laptopL};
    }
`;

export const Center = styled.div`
    @media screen and ${device.mobileS} {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        padding: 47px 0 62px 0;
        justify-content: start;
        margin-left: 165px;

    }
`;
export const BlockNavigationAndContent = styled.section`
    @media screen and ${device.mobileS} {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
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
