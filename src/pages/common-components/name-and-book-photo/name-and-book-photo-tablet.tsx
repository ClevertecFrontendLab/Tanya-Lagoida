import React from 'react';

import {ButtonComponent} from '../../components/button/button-component';
import {LabelText} from '../../labels/labels';
import {AboutBook} from '../about-book/about-book';

import { ButtonBookContainer,
} from './laptop-styles';
import {
    AuthorNameTablet,
    BookNameTable, ContainerTabletBook,
    ContainerTabletStyles,
    PhotoBoxTablet,
    RightContainerBookTablet,
} from './tablet-styles';
import {SwiperTabletAndMobile} from '../../components/swiper/swiper-for-tablet-and-mobile';
import {ImgContainerForSwiper} from '../../components/swiper/styles';
import withoutCover from '../../images/icon-without-cover.svg';
import {TBooksByIdType} from '../../../services/book-service-types';
import {dateFunc} from '../../../func/date-adding-zero-func';

type TProps = {
    book?: TBooksByIdType
}
export const NameBookPhotoAndAboutBookTablet: React.FC<TProps> = ({book}) => (
    <ContainerTabletBook>
        <ContainerTabletStyles>
            <PhotoBoxTablet images={book?.images}>
                {book?.images  ? <SwiperTabletAndMobile  book={book}/>
                    : <ImgContainerForSwiper>
                        <img src={withoutCover} alt='' />
                    </ImgContainerForSwiper>
                }
            </PhotoBoxTablet>
            <RightContainerBookTablet>
                <BookNameTable>
                    <LabelText
                        data-test-id='book-title'
                        variantText="large24">{book?.title}</LabelText>


                </BookNameTable>
                <AuthorNameTablet>
                    {
                        book?.authors.map((author) =>
                            <LabelText variantText="medium14Bold" key={author}>
                                {author}
                            </LabelText>)
                    }
                </AuthorNameTablet>
                <ButtonBookContainer>
                    <ButtonComponent
                        status={book?.booking ? 'booking'
                            : book?.delivery ? 'delivery'
                                : 'inStock'}
                        width="306px"
                        height="52px">
                        <LabelText variantText='medium16LS'>
                            {book?.booking ? `Занята до ${dateFunc(book?.booking.dateOrder)}`
                                : book?.delivery ? 'Забронирована'
                                    : 'Забронировать'}
                        </LabelText>
                    </ButtonComponent>
                </ButtonBookContainer>
            </RightContainerBookTablet>
        </ContainerTabletStyles>
        <AboutBook book={book}/>
    </ContainerTabletBook>
);
