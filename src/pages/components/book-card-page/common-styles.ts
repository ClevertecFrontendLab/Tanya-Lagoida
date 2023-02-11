import styled from 'styled-components';

import { device } from '../../main/styles';

export const BookCardPageContainerStyles = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
: last-child {
    justify-items: end;
}

@media screen and ${device.mobileS} {
        width: 320px;
    }
    @media screen and ${device.tablet} {
        width: 768px;
    }
    @media screen and ${device.laptopL} {
        width: 1110px;
    }
`
