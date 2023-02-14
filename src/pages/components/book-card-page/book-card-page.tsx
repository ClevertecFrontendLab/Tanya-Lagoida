import React from 'react';
import {useParams} from 'react-router-dom';
import {skipToken} from '@reduxjs/toolkit/query';
import {
    DetailedInformation
} from '../../common-components/detailed-information/detailed-information';
import {
    NameBookPhotoAndAboutBook
} from '../../common-components/name-and-book-photo/name-and-book-photo';
import {Rating} from '../../common-components/rating/rating';
import {Reviews} from '../../common-components/reviews/reviews';

import {useGettingABookByIdQuery} from '../../../services/book-service';
import {Loader} from '../../../loader/loader';
import {Error} from '../../../error/error';



export const BookCardPage = () => {

    const {bookId} = useParams();
    const id = bookId === undefined ? bookId : +bookId
    const { data: book, isLoading, isFetching, isError } = useGettingABookByIdQuery(id ?? skipToken)

    if (isLoading || isFetching) {
        return <Loader/>;
    }
    if (isError) {
        return <Error/>;
    }

        return (
            <>
                <NameBookPhotoAndAboutBook book={book}/>
                <Rating book={book}/>
                <DetailedInformation book={book}/>
                <Reviews book={book}/>
            </>
        );
};


