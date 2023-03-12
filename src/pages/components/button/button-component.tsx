import React from 'react';

import {Button} from './styles';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    status?: 'inStock' | 'delivery' | 'booking' | 'default'
    width?: string
    height?: string
    error?: any
}
export const ButtonComponent: React.FC<TButtonProps> = ({
    error,
    status,
    height = '40px',
    width = '150px',
    children,
    ...restProps
}) => (

    <Button
        width={width}
        height={height}
        type="button"
        error={error}
        status={status}
        {...restProps}
    >
        {children}
    </Button>


);
