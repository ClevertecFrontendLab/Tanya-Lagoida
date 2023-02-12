import styled from 'styled-components';

import {EColors} from '../../themes/themes';

export const ContainerTabletStyles = styled.div`
    //height: 254px;
    width: 640px;
    display: flex;
    //justify-content: center;
    gap: 32px;
    margin-bottom: 48px;
    align-items: start;
`
export const PhotoBoxTablet = styled.div<{images?: Array<{ url: string }> | null}>`
    width: 136px;
    height: ${(props) => props.images?.length && props.images.length > 1  ? '238px' : '198px'};
`;
export const RightContainerBookTablet = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;
export const BookNameTable = styled.div`
    width: 472px;
`;
export const AuthorNameTablet = styled.div`
    color: ${EColors.Grey};
    width: 472px;
`;
export const ContainerTabletBook = styled.div`
margin-bottom: 54px;
    width: 640px;
`
