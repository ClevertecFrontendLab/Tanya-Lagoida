import React from 'react';
import { Breadcrumbs } from '../../common-components/breadcrumbs/breadcrumbs';
import { BookCardPageContainerStyles } from './common-styles';
import { BookCardPage } from './book-card-page';

export const BookPage = () => (
    <BookCardPageContainerStyles>
        <Breadcrumbs/>
        <BookCardPage/>
    </BookCardPageContainerStyles>
);

