import React from 'react';

import {Button} from './styles';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    status?: 'inStock' | 'delivery' | 'booking'
    width?: string
    height?: string
    error?: any
    dataTestId?: string
}
export const ButtonComponent: React.FC<TButtonProps > = ({ dataTestId, error, status, height = '40px', width = '150px', children, ...restProps}) => (

        <Button data-test-id={dataTestId} width={width} height={height}
            type='button'
                error={error}
            status={status} {...restProps}
        >{children}</Button>


)
