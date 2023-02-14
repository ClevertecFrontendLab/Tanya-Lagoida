import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
import {device} from '../../main/styles';

import {NameBookPhotoAndAboutBookLaptop} from './name-and-book-photo-laptop';
import {NameBookPhotoAndAboutBookMobile} from './name-and-book-photo-mobile';
import {NameBookPhotoAndAboutBookTablet} from './name-and-book-photo-tablet';
import {TBooksByIdType} from '../../../services/book-service-types';

type TProps = {
    book?: TBooksByIdType
}

export const NameBookPhotoAndAboutBook: React.FC<TProps> = ({book}) => {
    const isTabletView = useMediaQuery(`${device.tablet}`);
    const isLaptopLView = useMediaQuery(`${device.laptopL}`);

    if (isLaptopLView) return <NameBookPhotoAndAboutBookLaptop book={book}/>;
    if (isTabletView) return <NameBookPhotoAndAboutBookTablet book={book}/>;
    return <NameBookPhotoAndAboutBookMobile book={book}/>;
};
