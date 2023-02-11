import React from 'react';

import {ButtonComponent} from '../../components/button/button-component';
import { TBooks} from '../../constants/constants-book';
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

type TProps = {
    bookData?: TBooksByIdType
}
export const NameBookPhotoAndAboutBookTablet: React.FC<TProps> = ({book}) => (
    <ContainerTabletBook>
        <ContainerTabletStyles>
            <PhotoBoxTablet book={book}>
                {book?.cover === undefined ?
                    <ImgContainerForSwiper>
                        <img src={withoutCover} alt='' />
                    </ImgContainerForSwiper>
                    : <SwiperTabletAndMobile  book={book}/>
                }
            </PhotoBoxTablet>
            <RightContainerBookTablet>
                <BookNameTable>
                    <LabelText variantText="large24">
                        {book?.bookName}
                    </LabelText>
                </BookNameTable>
                <AuthorNameTablet>
                    <LabelText variantText="medium14Bold">
                        {book?.bookAuthor}
                    </LabelText>
                </AuthorNameTablet>
                <ButtonBookContainer>
                    <ButtonComponent status={book?.status} width="306px" height="52px">
                        <LabelText variantText='medium16LS'>{book?.status === 'inStock'
                            ? 'Забронировать'
                            : book?.status === 'isUsed' ? 'Занята до 03.05' : 'Забронирована'}
                        </LabelText>
                    </ButtonComponent>
                </ButtonBookContainer>
            </RightContainerBookTablet>
        </ContainerTabletStyles>
        <AboutBook/>
    </ContainerTabletBook>


);

