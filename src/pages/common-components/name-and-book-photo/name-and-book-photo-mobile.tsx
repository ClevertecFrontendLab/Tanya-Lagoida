import React from 'react';

import { ButtonComponent } from '../../components/button/button-component';
import { TBooks} from '../../constants/constants-book';
import { LabelText } from '../../labels/labels';
import { AboutBook } from '../about-book/about-book';

import {
    AuthorName,
} from './laptop-styles';
import {
    BookNameMobile,
    ButtonBookContainerMobile,
    ContainerTabletStylesMobile,
    PhotoBoxMobile} from './mobile-styles';
import {SwiperTabletAndMobile} from '../../components/swiper/swiper-for-tablet-and-mobile';
import {ImgContainerForSwiper} from '../../components/swiper/styles';
import withoutCover from '../../images/icon-without-cover.svg';
import {TBooksByIdType} from '../../../services/book-service-types';

type TProps = {
    bookData?: TBooksByIdType
}
export const NameBookPhotoAndAboutBookMobile: React.FC<TProps> = ({bookData}) => (
    <ContainerTabletStylesMobile>
        <PhotoBoxMobile bookData={bookData}>
            {book?.cover === undefined ?
                <ImgContainerForSwiper>
                    <img src={withoutCover} alt='' />
                </ImgContainerForSwiper>
                : <SwiperTabletAndMobile  book={book}/>
            }
        </PhotoBoxMobile>
        <BookNameMobile>
            <LabelText variantText='medium18'>
                {book?.bookName}
            </LabelText>
        </BookNameMobile>
        <AuthorName>
            <LabelText variantText='small400'>
                {book?.bookAuthor}
            </LabelText>
        </AuthorName>
        <ButtonBookContainerMobile>
            <ButtonComponent status={book?.status} width='288px' height='40px'>
                <LabelText variantText='smallLS'>{book?.status === 'inStock'
                    ? 'Забронировать'
                    : book?.status === 'isUsed' ? 'Занята до 03.05' : 'Забронирована'}
                </LabelText>
            </ButtonComponent>
        </ButtonBookContainerMobile>
        <AboutBook/>
    </ContainerTabletStylesMobile>
);

