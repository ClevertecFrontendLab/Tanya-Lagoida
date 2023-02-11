import React from 'react';

import {IconListSvg} from '../../images/button-icon-list';
import {IconTableSvg} from '../../images/button-icon-table';
import {SortBookImg} from '../../images/icon-sort-ascending';
import {SearchBookImg} from '../../images/search-book';
import {EColors} from '../../themes/themes';

export const svgIcons = {
    buttonIconList: IconListSvg,
    buttonIconTable: IconTableSvg,
    buttonIconSearch: SearchBookImg,
    buttonIconSort: SortBookImg
};

type TProps = {
    typeSvgIcons: keyof typeof svgIcons;
    color?: EColors,
};

export const Icon = ({typeSvgIcons, color}: TProps) => {
    const IconComponent = svgIcons[typeSvgIcons];

    return (
        <IconComponent color={color}/>
    );
};

