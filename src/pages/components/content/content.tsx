import React from 'react';

import {BookCardList} from '../book-card-list/book-card-list';
import {BookCardTable} from '../book-card-table/book-card-table';

import {ContentStylesForDesktopListView, ContentStylesForDesktopTableView} from './styles';
import { TBooksGenresType, TBooksType } from '../../../services/book-service-types';

type TProps = {
    isListView: boolean
    dataBooks: TBooksType[]
    dataCategories: TBooksGenresType[]
    isDefaultSort: boolean
}
export const Content: React.FC<TProps> = ({isListView, dataBooks, dataCategories, isDefaultSort,  ...restProps}) => {
    if (isListView) {
        return (
            <ContentStylesForDesktopListView>
                <BookCardList dataBooks={dataBooks} dataCategories={dataCategories} isDefaultSort={isDefaultSort}/>
            </ContentStylesForDesktopListView>
        );
    }

    return (
        <ContentStylesForDesktopTableView>
            <BookCardTable dataBooks={dataBooks} dataCategories={dataCategories} isDefaultSort={isDefaultSort}/>
        </ContentStylesForDesktopTableView>
    );
};












