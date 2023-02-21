import React from 'react';
import {SwiperLaptop} from '../../components/swiper/swiper-for-laptop';
import {ButtonComponent} from '../../components/button/button-component';
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
import {TBooksByIdType} from '../../../services/book-service-types';
import {dateFunc} from '../../../func/date-adding-zero-func';


type TProps = {
    book?: TBooksByIdType
}

export const NameBookPhotoAndAboutBookLaptop: React.FC<TProps> = ({book}) => (

    <ContainerLaptopStyles images={book?.images}>
        <PhotoBox images={book?.images}>
            {book?.images ?
                <SwiperLaptop book={book}/>
                :
                <ImgContainerForSwiper>
                    <img src={withoutCover} alt='' />
                </ImgContainerForSwiper>
                }
        </PhotoBox>
        <RightContainerBook>
            <NameAndAuthorContainer>
                <BookName>
                    <LabelText
                        data-test-id='book-title'
                        variantText="large">
                        {book?.title}
                    </LabelText>
                </BookName>
                <AuthorName>
                    {
                        book?.authors.map((author) =>
                            <LabelText variantText="medium18" key={author}>
                                {author}
                            </LabelText>)
                    }
                </AuthorName>
            </NameAndAuthorContainer>
            <ButtonBookContainer>
                <ButtonComponent
                    status={book?.booking ? 'booking'
                        : book?.delivery ? 'delivery'
                            : 'inStock'}
                    width="350px"
                    height="52px">
                    <LabelText variantText="medium16LS">
                        {book?.booking ? `Занята до ${dateFunc(book?.booking.dateOrder)}`
                        : book?.delivery ? 'Забронирована'
                            : 'Забронировать'}
                    </LabelText>
                </ButtonComponent>
            </ButtonBookContainer>
            <AboutBook book={book}/>
        </RightContainerBook>
    </ContainerLaptopStyles>
);
