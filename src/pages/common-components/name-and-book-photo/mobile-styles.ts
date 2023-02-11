import styled from 'styled-components';

import {TProps} from '../../components/swiper/swiper-for-tablet-and-mobile';

export const ContainerTabletStylesMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 42px;
    width: 288px;
`
export const PhotoBoxMobile = styled.div<TProps>`
    width: 188px;
    height: ${(props) => props.book?.cover?.length && props.book?.cover?.length > 1  ? '300px' : '260px'};
    margin-bottom: 16.5px;
`;
export const BookNameMobile = styled.div`
    margin-bottom: 8px;
    align-self: start;
`;
export const ButtonBookContainerMobile = styled.div`
    margin: 42px 0;
`;
