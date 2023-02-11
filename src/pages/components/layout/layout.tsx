import React from 'react';
import {Outlet} from 'react-router-dom';

import {MainStyles} from '../../main/styles';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';

export const Layout = () => (
    <MainStyles>
        <Header/>
        <Outlet/>
        <Footer/>
    </MainStyles>
);

