import React from 'react';
import {Outlet, useOutletContext} from 'react-router-dom';

import {Center, device} from '../../main/styles';
import {Menu} from '../menu/menu';
import {useMediaQuery} from '../../hooks/use-media-query';

export const LayoutMainPage = () => {
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    return (
        <Center>
            {isLaptopView ? <Menu/> : null}
            <Outlet context={useOutletContext()} />
        </Center>
    );
};
