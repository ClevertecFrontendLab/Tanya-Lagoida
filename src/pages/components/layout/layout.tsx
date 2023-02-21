import React from 'react';
import {Outlet} from 'react-router-dom';

import {MainStyles} from '../../main/styles';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {useGettingAListOfBookGenresQuery} from '../../../services/book-service';

export const Layout = () => {
    const {
        data: dataCategories = [],
        isLoading: isLoadingCategories,
        isFetching: isFetchingCategories,
        isError: isErrorCategories
    } = useGettingAListOfBookGenresQuery();

    return (
        <MainStyles>
            <div>
                <Header/>
                <Outlet/>
            </div>
            <Footer/>
        </MainStyles>
    );
};

