import React from 'react';
import {Outlet, useOutletContext} from 'react-router-dom';

import {useGettingAListOfBookGenresQuery} from '../../../services/book-service';
import {MainStyles} from '../../main/styles';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';

export type TContextType = {
    isDefaultSort: boolean,
    updateSort: (value: (previousValue: boolean) => boolean) => void
}

export const Layout = () => {
    const {
        data: dataCategories = [],
        isLoading: isLoadingCategories,
        isFetching: isFetchingCategories,
        isError: isErrorCategories
    } = useGettingAListOfBookGenresQuery();

    const [isDefaultSort, setIsDefaultSort] = React.useState<boolean>(true);

    return (
        <MainStyles>
            <div>
                <Header/>
                <Outlet context={{isDefaultSort, updateSort: setIsDefaultSort}}/>
            </div>
            <Footer/>
        </MainStyles>
    );
};

export const useSort = () => useOutletContext<TContextType>()
