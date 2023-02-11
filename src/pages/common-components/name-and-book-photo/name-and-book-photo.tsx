import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
import {device} from '../../main/styles';

import {NameBookPhotoAndAboutBookLaptop} from './name-and-book-photo-laptop';
import {NameBookPhotoAndAboutBookMobile} from './name-and-book-photo-mobile';
import {NameBookPhotoAndAboutBookTablet} from './name-and-book-photo-tablet';
import {TBooksByIdType, TBooksType} from '../../../services/book-service-types';

type TProps = {
    bookData?: TBooksByIdType
}

export const NameBookPhotoAndAboutBook: React.FC<TProps> = ({bookData}) => {
    const isTabletView = useMediaQuery(`${device.tablet}`);
    const isLaptopLView = useMediaQuery(`${device.laptopL}`);

    if (isLaptopLView) return <NameBookPhotoAndAboutBookLaptop bookData={bookData}/>;
    if (isTabletView) return <NameBookPhotoAndAboutBookTablet bookData={bookData}/>;

    return <NameBookPhotoAndAboutBookMobile bookData={bookData}/>;

};
