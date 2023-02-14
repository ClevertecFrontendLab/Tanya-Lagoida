import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {StarComponent} from '../../common-components/stars/star-component';
import {useMediaQuery} from '../../hooks/use-media-query';
import withoutCover from '../../images/icon-without-cover.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';
import {ButtonComponent} from '../button/button-component';

import {
    BookAuthorBlock,
    BookCoverContainer,
    BookNameBlock, ButtonContainer,
    ContainerTableView,
    Name, StarLabel, StarsBoxBookCardTable,
} from './styles';
import { TBooksType } from '../../../services/book-service-types';
import {EEndPoints} from '../../../config/endpoints';
import {ImgContainerList} from '../book-card-list/styles';
import {dateFunc} from '../../../func/date-adding-zero-func';

type TProps = {
    dataBooks: TBooksType[]
}
export const BookCardTable: React.FC<TProps> = ({dataBooks}) => {
    const navigate = useNavigate();
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isLaptopView = useMediaQuery( `${device.laptopL}`);
    const {category} = useParams();

    return (
        <React.Fragment>{
            dataBooks.map((book: TBooksType) =>
                <ContainerTableView key={book.id} data-test-id="card" onClick={() =>
                    navigate(`/books/${category}/${book.id}`)}>
                    <BookCoverContainer>
                        {
                            book.image ?
                                <ImgContainerList
                                    image={book.image.url}
                                    src={`${EEndPoints.baseUrl}${book.image.url}`}
                                    alt=""
                                />
                                :  <ImgContainerList
                                    src={withoutCover}
                                    alt=""
                                />
                        }
                    </BookCoverContainer>
                    {book.rating === null ?
                        <StarLabel>
                            <LabelText variantText="medium14Norm">ещё нет оценок</LabelText>
                        </StarLabel>
                        :
                        <StarsBoxBookCardTable>
                            {
                                book?.rating ?
                                    <StarComponent
                                        rating={book?.rating}
                                        width={isMobileView ? '34px' : '24px'}
                                        height={isMobileView ? '34px' : '24px'}
                                        alt=''/>   : null
                            }

                        </StarsBoxBookCardTable>
                    }
                    <Name>
                        <BookNameBlock>
                            <LabelText
                                variantText={isMobileView || isLaptopView  ? 'medium14Bold' : 'smallBold'}>{book.title}</LabelText>
                        </BookNameBlock>
                        <BookAuthorBlock>
                            {
                                book.authors.map((author) =>

                                        <LabelText
                                            variantText={isLaptopView ? 'medium14Norm' : 'small400'}
                                            key={author}>
                                            {author},
                                        </LabelText>
                                    )
                            }
                            <span>          </span>
                            <LabelText variantText={isLaptopView ? 'medium14Norm' : 'small400'}>
                                {book.issueYear}
                            </LabelText>
                        </BookAuthorBlock>
                    </Name>
                    <ButtonContainer>
                        <ButtonComponent
                            status={book.booking ? 'booking'
                            : book.delivery ? 'delivery'
                            : 'inStock'}
                            width={isMobileView  ? '256px' : '166px'}
                            height="40px"
                        >
                            <LabelText
                                variantText="smallLS">{book.booking ? `Занята до ${dateFunc(book?.booking.dateOrder)}`
                                : book.delivery ? 'Забронирована'
                                    : 'Забронировать'}
                            </LabelText>
                        </ButtonComponent>
                    </ButtonContainer>
                </ContainerTableView>
            )
        }</React.Fragment>
    );
};
