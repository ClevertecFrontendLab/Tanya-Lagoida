import styled from 'styled-components';

import {TStarsProps} from './star-component';

export const Star = styled.img<TStarsProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
