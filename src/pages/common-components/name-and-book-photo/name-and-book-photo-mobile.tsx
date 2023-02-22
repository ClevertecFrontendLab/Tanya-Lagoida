import React from 'react';

import {ButtonComponent} from '../../components/button/button-component';
import {LabelText} from '../../labels/labels';
import {AboutBook} from '../about-book/about-book';

import {
    AuthorName,
} from './laptop-styles';
import {
    BookNameMobile,
    ButtonBookContainerMobile,
    ContainerTabletStylesMobile,
    PhotoBoxMobile
} from './mobile-styles';
import {SwiperTabletAndMobile} from '../../components/swiper/swiper-for-tablet-and-mobile';
import {ImgContainerForSwiper} from '../../components/swiper/styles';
import withoutCover from '../../images/icon-without-cover.svg';
import {TBooksByIdType} from '../../../services/book-service-types';
import {dateFunc} from '../../../func/date-adding-zero-func';

type TProps = {
    book?: TBooksByIdType
}
export const NameBookPhotoAndAboutBookMobile: React.FC<TProps> = ({book}) => (

    <ContainerTabletStylesMobile>
        <PhotoBoxMobile images={book?.images}>
            {book?.images ? <SwiperTabletAndMobile book={book}/>
                :
                <ImgContainerForSwiper>
                    <img src={withoutCover} alt=""/>
                </ImgContainerForSwiper>
            }
        </PhotoBoxMobile>
        <BookNameMobile>
            <LabelText
                data-test-id='book-title'
                variantText="medium18">{book?.title}</LabelText>


        </BookNameMobile>
        <AuthorName>
            {
                book?.authors.map((author) =>
                    <LabelText variantText="small400" key={author}>
                        {author}
                    </LabelText>)
            }
        </AuthorName>
        <ButtonBookContainerMobile>
            <ButtonComponent
                status={book?.booking ? 'booking'
                    : book?.delivery ? 'delivery'
                        : 'inStock'}
                width="288px" height="40px">
                <LabelText variantText="smallLS">
                    {book?.booking ? `Занята до ${dateFunc(book?.booking.dateOrder)}`
                        : book?.delivery ? 'Забронирована'
                            : 'Забронировать'}
                </LabelText>
            </ButtonComponent>
        </ButtonBookContainerMobile>
        <AboutBook book={book}/>
    </ContainerTabletStylesMobile>
);

