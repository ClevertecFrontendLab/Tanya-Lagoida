import React from 'react';

import {EColors} from '../../themes/themes';

export const iconButtonBackgroundColors = {
    primary: `linear-gradient(231.58deg, ${EColors.Red} -53.35%, ${EColors.Yellow} 297.76%)`,
    secondary: EColors.White,
}

export type TViewButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>  & {
    variantOfIcons: keyof typeof iconButtonBackgroundColors;
}

