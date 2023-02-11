import React from 'react';

import {Button} from './styles';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    status: 'inStock' | 'isUsed' | 'booked' | undefined
    width: string | undefined
    height: string | undefined
}
export const ButtonComponent: React.FC<TButtonProps > = ({ status, height = '40px', width = '150px', children, ...restProps}) => (

        <Button width={width} height={height}
            type='button'
            status={status} {...restProps}
        >{children}</Button>


)
