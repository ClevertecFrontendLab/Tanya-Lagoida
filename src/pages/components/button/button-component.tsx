import React from 'react';

import {FieldError, FieldErrors} from 'react-hook-form';
import {Button} from './styles';
import {TAuthorizationRequest} from '../../../services/login-service-types';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    status?: 'inStock' | 'delivery' | 'booking' | 'default'
    width?: string
    height?: string
    error?: FieldError |
        FieldErrors<{ username: string; password: string}> |
        FieldErrors<{phone: string, email: string}> |
        FieldErrors<{firstName: string, lastName: string}> |
        FieldErrors<TAuthorizationRequest>
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
