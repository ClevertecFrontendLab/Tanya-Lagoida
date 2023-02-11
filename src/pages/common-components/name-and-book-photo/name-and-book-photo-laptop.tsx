import React from 'react';
import {SwiperLaptop} from '../../components/swiper/swiper-for-laptop';
import {ButtonComponent} from '../../components/button/button-component';
import {TBooks} from '../../constants/constants-book';
import {LabelText} from '../../labels/labels';
import {AboutBook} from '../about-book/about-book';

import {
    AuthorName,
    BookName, ButtonBookContainer,
    ContainerLaptopStyles,
    NameAndAuthorContainer, PhotoBox,
    RightContainerBook,
} from './laptop-styles';
import withoutCover from '../../images/icon-without-cover.svg';
import {ImgContainerForSwiper} from '../../components/swiper/styles';
import {TBooksByIdType, TBooksType} from '../../../services/book-service-types';


type TProps = {
    bookData?: TBooksByIdType
}

export const NameBookPhotoAndAboutBookLaptop: React.FC<TProps> = ({bookData}) => (

    <ContainerLaptopStyles bookData={bookData}>
        <PhotoBox bookData={bookData}>
            {book?.cover === undefined ?
                <ImgContainerForSwiper>
                    <img src={withoutCover} alt='' />
                </ImgContainerForSwiper>
                : <SwiperLaptop book={book}/>}
        </PhotoBox>
        <RightContainerBook>
            <NameAndAuthorContainer>
                <BookName>
                    <LabelText variantText="large">
                        {book?.bookName}
                    </LabelText>
                </BookName>
                <AuthorName>
                    <LabelText variantText="medium18">
                        {book?.bookAuthor}
                    </LabelText>
                </AuthorName>
            </NameAndAuthorContainer>
            <ButtonBookContainer>
                <ButtonComponent status={book?.status} width="350px" height="52px">
                    <LabelText variantText="medium16LS">
                        {book?.status === 'inStock' ? 'Забронировать' :
                        book?.status === 'isUsed' ? 'Занята до 03.05' : 'Забронирована'}
                    </LabelText>
                </ButtonComponent>
            </ButtonBookContainer>
            <AboutBook/>
        </RightContainerBook>
    </ContainerLaptopStyles>
);
