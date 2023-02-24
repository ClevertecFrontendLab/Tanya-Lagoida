import React from 'react';

import {ViewIconButtonStyles} from '../../components/button/styles';
import {iconButtonBackgroundColors} from '../../components/button/view-icon-button';
import {EColors} from '../../themes/themes';
import {Icon, svgIcons} from '../icon/icon';

type TProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variantOfIcons: keyof typeof iconButtonBackgroundColors;
    typeSvgIcons: keyof typeof svgIcons;
    'data-test-id'?: string;
    isSearchInputOpen?: boolean;
};

const iconColors = {
    primary: EColors.White,
    secondary: EColors.Grey,
}
export const IconButton:React.FC<TProps> = ({isSearchInputOpen, variantOfIcons, typeSvgIcons, 'data-test-id': dataTestId, ...restProps}) => (
        <ViewIconButtonStyles
            data-test-id={dataTestId}
            variantOfIcons={variantOfIcons}
            isSearchInputOpen={isSearchInputOpen}
            {...restProps} >
            <Icon
                typeSvgIcons={typeSvgIcons}
                color={iconColors[variantOfIcons]}/>
        </ViewIconButtonStyles>
);

