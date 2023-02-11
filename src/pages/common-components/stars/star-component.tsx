import React from 'react';

import {Star} from './style';

export type TStarsProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    width?: string
    height?: string
    src?: string
}


export const StarComponent: React.FC<TStarsProps> = ({src, width= '24px', height= '24px', ...restProps}) =>  (
    <Star src={src} width={width} height={height} {...restProps} alt='' />
    );
