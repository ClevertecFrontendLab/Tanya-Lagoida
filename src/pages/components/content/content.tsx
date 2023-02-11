import React from 'react';

import {BookCardList} from '../book-card-list/book-card-list';
import {BookCardTable} from '../book-card-table/book-card-table';

import {ContentStylesForDesktopListView, ContentStylesForDesktopTableView} from './styles';
import {TBooksType} from '../../../services/book-service-types';

type TProps = {
    isListView: boolean
    dataBooks: Array<TBooksType>
}
export const Content: React.FC<TProps> = ({isListView, dataBooks}) => {
    if (isListView) {
        return (
            <ContentStylesForDesktopListView>
                <BookCardList dataBooks={dataBooks}/>
            </ContentStylesForDesktopListView>
        );
    }

    return (
        <ContentStylesForDesktopTableView>
            <BookCardTable dataBooks={dataBooks}/>
        </ContentStylesForDesktopTableView>
    );
};












