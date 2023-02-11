import React, {useState} from 'react';

import {BlockNavigationAndContent} from './styles';
import {Navigation} from '../components/navigation/navigation';
import {Content} from '../components/content/content';
import {
    useGettingAListOfBookGenresQuery,
    useGettingAListOfBooksQuery
} from '../../services/book-service';

export const MainPage = () => {
    const { data: dataBooks = [], isLoading: isLoadingBooks, isFetching: isFetchingBooks, isError: isErrorBooks } = useGettingAListOfBooksQuery()
    const { data: dataCategories = [], isLoading: isLoadingCategories, isFetching: isFetchingCategories, isError: isErrorCategories } = useGettingAListOfBookGenresQuery()
    console.log(dataBooks);
    console.log(dataCategories);
    const [isListView, setIsListView] = useState<boolean>(false);
    const handleIsListView = (value: boolean): void => setIsListView(value);


        return (
            <BlockNavigationAndContent>
                <Navigation handleIsListView={handleIsListView} isListView={isListView} />
                <Content isListView={isListView} dataBooks={dataBooks} dataCategories={dataCategories}/>
            </BlockNavigationAndContent>
        )


}
