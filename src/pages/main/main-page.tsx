import React, {ChangeEvent, useState} from 'react';

import {Navigate} from 'react-router-dom';
import {BlockNavigationAndContent} from './styles';
import {Navigation} from '../components/navigation/navigation';
import {Content} from '../components/content/content';
import {
    useGettingAListOfBookGenresQueryState,
    useGettingAListOfBooksQuery
} from '../../services/book-service';
import {Loader} from '../../loader/loader';
import {Error} from '../../error/error';
import {useSort} from '../components/layout/layout';
import {useAppSelector} from '../../store/store';


export const MainPage = () => {
    const {
        data: dataBooks = [],
        isLoading: isLoadingBooks,
        isFetching: isFetchingBooks,
        isError: isErrorBooks
    } = useGettingAListOfBooksQuery();
    const {
        data: dataCategories = [],
        isLoading: isLoadingCategories,
        isFetching: isFetchingCategories,
        isError: isErrorCategories
    } = useGettingAListOfBookGenresQueryState();

    const [isListView, setIsListView] = useState<boolean>(false);
    const [enteredText, setEnteredText] = useState<string>('');
    const {isDefaultSort, updateSort} =  useSort()

    // const isLoggedUser = useAppSelector((state) => state.userSlice.isLoggedUser)
    const state = useAppSelector((state) => state.userSlice)

    const handleSortBooks = (): void => {

        updateSort( (previousValue) => !previousValue);
    }

    const handleIsListView = (value: boolean): void => setIsListView(value);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredText(event.target.value);
    };


    if (isLoadingBooks || isLoadingCategories || isFetchingBooks || isFetchingCategories) {
        return <Loader/>;
    }
    if (isErrorBooks || isErrorCategories) {
        return <Error/>;
    }

    const user = localStorage.getItem('user');
    if (!user) {
        return <Navigate to='/auth' />
    }

    return (
        (dataBooks && dataCategories) &&
        <BlockNavigationAndContent>
            <Navigation
                handleIsListView={handleIsListView}
                isListView={isListView}
                handleSortBooks={handleSortBooks}
                handleInputChange={handleInputChange}
            />
            <Content isListView={isListView} dataBooks={dataBooks} dataCategories={dataCategories}
                     isDefaultSort={isDefaultSort} enteredText={enteredText}/>
        </BlockNavigationAndContent>
    );

};
