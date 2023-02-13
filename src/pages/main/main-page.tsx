import React, {useState} from 'react';

import {BlockNavigationAndContent} from './styles';
import {Navigation} from '../components/navigation/navigation';
import {Content} from '../components/content/content';
import {
    useGettingAListOfBookGenresQuery,
    useGettingAListOfBooksQuery
} from '../../services/book-service';
import {Loader} from '../../loader/loader';
import {Error} from '../../error/error';

export const MainPage = () => {
    const { data: dataBooks = [], isLoading: isLoadingBooks, isFetching: isFetchingBooks, isError: isErrorBooks } = useGettingAListOfBooksQuery()
    const { data: dataCategories = [], isLoading: isLoadingCategories, isFetching: isFetchingCategories, isError: isErrorCategories } = useGettingAListOfBookGenresQuery()

    const [isListView, setIsListView] = useState<boolean>(false);
    const handleIsListView = (value: boolean): void => setIsListView(value);
    if (isLoadingBooks || isLoadingCategories || isFetchingBooks || isFetchingCategories) {
        return <Loader/>;
    }
    if (isErrorBooks || isErrorCategories) {
        return <Error/>;
    }


        return (
            <BlockNavigationAndContent>
                <Navigation handleIsListView={handleIsListView} isListView={isListView}/>
                <Content isListView={isListView} dataBooks={dataBooks}/>
            </BlockNavigationAndContent>
        );

}
