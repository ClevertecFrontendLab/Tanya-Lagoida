import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {StarComponent} from '../../common-components/stars/star-component';
import {useMediaQuery} from '../../hooks/use-media-query';
import withoutCover from '../../images/icon-without-cover.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';
import {ButtonComponent} from '../button/button-component';

import {
    BookAuthorBlock, BookAuthorBlockContainer,
    BookCoverContainer,
    BookNameBlock, BookNameBlockContainer, ButtonContainer,
    ContainerTableView,
    Name, NonCategory, StarLabel, StarsBoxBookCardTable,
} from './styles';
import {TBooksGenresType, TBooksType} from '../../../services/book-service-types';
import {EEndPoints} from '../../../config/endpoints';
import {ImgContainerList} from '../book-card-list/styles';
import {dateFunc} from '../../../func/date-adding-zero-func';

type TProps = {
    dataBooks: TBooksType[]
    dataCategories: TBooksGenresType[]
    isDefaultSort: boolean
}
export const BookCardTable: React.FC<TProps> = ({dataBooks, dataCategories, isDefaultSort}) => {
    const navigate = useNavigate();
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    const {category} = useParams();
    const selectedCategory = dataCategories.find((bookCategory) => bookCategory.path === category);
    const [sortArray, setSortArray] = useState<TBooksType[]>(dataBooks);

    const filteredDataBooks = [...dataBooks].sort((a, b) => isDefaultSort ? b.rating - a.rating : a.rating - b.rating).filter((book) =>
        book.categories.find((categoryBook) => categoryBook === selectedCategory?.name)
    );

    if (filteredDataBooks.length === 0 && category !== 'all') {
        return <NonCategory>
            <LabelText
                data-test-id='empty-category'
                variantText={isMobileView ? 'medium18LS' : 'large'}>В этой категории
                книг ещё&nbsp;нет</LabelText>
        </NonCategory>;
    }

    return (
        <> {
            (category === 'all' ? [...dataBooks].sort((a, b) => isDefaultSort ? b.rating - a.rating : a.rating - b.rating) : filteredDataBooks)
                .map((book: TBooksType) =>
                    <ContainerTableView
                        key={book.id}
                        data-test-id="card"
                        onClick={() =>
                            navigate(`/books/${category}/${book.id}`)}>
                        <BookCoverContainer>
                            {
                                book.image ?
                                    <ImgContainerList
                                        image={book.image.url}
                                        src={`${EEndPoints.baseUrl}${book.image.url}`}
                                        alt=""
                                    />
                                    : <ImgContainerList
                                        src={withoutCover}
                                        alt=""
                                    />
                            }
                        </BookCoverContainer>
                        {book.rating === null ?
                            <StarLabel>
                                <LabelText
                                    variantText="medium14Norm">ещё нет оценок</LabelText>
                            </StarLabel>
                            :
                            <StarsBoxBookCardTable>
                                <StarComponent
                                    rating={book?.rating}
                                    width={isMobileView ? '34px' : '24px'}
                                    height={isMobileView ? '34px' : '24px'}
                                    alt=""/>
                            </StarsBoxBookCardTable>
                        }
                        <Name>
                            <BookNameBlockContainer>
                                <BookNameBlock>
                                    <LabelText
                                        variantText={isMobileView || isLaptopView ? 'medium14Bold' : 'smallBold'}>{book.title}</LabelText>
                                </BookNameBlock>
                            </BookNameBlockContainer>
                            <BookAuthorBlockContainer>
                                <BookAuthorBlock>
                                    {
                                        book.authors.map((author) =>

                                            <LabelText
                                                variantText={isLaptopView ? 'medium14Norm' : 'small400'}
                                                key={author}>
                                                {author},&nbsp;
                                            </LabelText>
                                        )
                                    }
                                    <LabelText
                                        variantText={isLaptopView ? 'medium14Norm' : 'small400'}>
                                        {book.issueYear}
                                    </LabelText>
                                </BookAuthorBlock>
                            </BookAuthorBlockContainer>
                        </Name>
                        <ButtonContainer>
                            <ButtonComponent
                                status={book.booking ? 'booking'
                                    : book.delivery ? 'delivery'
                                        : 'inStock'}
                                width={isMobileView ? '256px' : '166px'}
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
        }

        </>

    );
};
