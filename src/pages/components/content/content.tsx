import React from 'react';

import { TBooksGenresType, TBooksType } from '../../../services/book-service-types';
import {BookCardList} from '../book-card-list/book-card-list';
import {BookCardTable} from '../book-card-table/book-card-table';

import {ContentStylesForDesktopListView, ContentStylesForDesktopTableView} from './styles';

type TProps = {
    isListView: boolean
    dataBooks: TBooksType[]
    dataCategories: TBooksGenresType[]
    isDefaultSort: boolean
    enteredText: string
}
export const Content: React.FC<TProps> = ({isListView, dataBooks, dataCategories, isDefaultSort, enteredText}) => {
    if (isListView) {
        return (
            <ContentStylesForDesktopListView>
                <BookCardList dataBooks={dataBooks} dataCategories={dataCategories} isDefaultSort={isDefaultSort} enteredText={enteredText}/>
            </ContentStylesForDesktopListView>
        );
    }

    return (
        <ContentStylesForDesktopTableView>
            <BookCardTable dataBooks={dataBooks} dataCategories={dataCategories} isDefaultSort={isDefaultSort} enteredText={enteredText}/>
        </ContentStylesForDesktopTableView>
    );
};












