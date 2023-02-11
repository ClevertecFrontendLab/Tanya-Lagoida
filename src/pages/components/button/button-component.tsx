import React from 'react';

import {Button} from './styles';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    status?: 'inStock' | 'delivery' | 'booking'
    width?: string
    height?: string
}
export const ButtonComponent: React.FC<TButtonProps > = ({ status, height = '40px', width = '150px', children, ...restProps}) => (

        <Button width={width} height={height}
            type='button'
            status={status} {...restProps}
        >{children}</Button>


)
