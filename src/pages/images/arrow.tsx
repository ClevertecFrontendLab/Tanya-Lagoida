import React from 'react';

type TArrowProps = {
    stroke: string
}

export const Arrow = ({stroke}: TArrowProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6L21 12M21 12L15 18M21 12H3" stroke={stroke} strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);




