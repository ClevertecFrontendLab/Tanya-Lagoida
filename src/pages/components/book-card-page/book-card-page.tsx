import React from 'react';
import {useParams} from 'react-router-dom';
import {skipToken} from '@reduxjs/toolkit/query';
import {Breadcrumbs} from '../../common-components/breadcrumbs/breadcrumbs';
import {
    DetailedInformation
} from '../../common-components/detailed-information/detailed-information';
import {
    NameBookPhotoAndAboutBook
} from '../../common-components/name-and-book-photo/name-and-book-photo';
import {Rating} from '../../common-components/rating/rating';
import {Reviews} from '../../common-components/reviews/reviews';

import {BookCardPageContainerStyles} from './common-styles';
import {useGettingABookByIdQuery} from '../../../services/book-service';



export const BookCardPage = () => {

    const {bookId} = useParams();
    const id = bookId === undefined ? bookId : +bookId
    const { data: book, isLoading, isFetching, isError } = useGettingABookByIdQuery(id ?? skipToken)
    console.log(id)

        return (
            <BookCardPageContainerStyles>
                <Breadcrumbs book={book}/>
                <NameBookPhotoAndAboutBook book={book}/>
                <Rating book={book} />
                <DetailedInformation book={book}/>
                <Reviews book={book}/>
            </BookCardPageContainerStyles>
        );
};


