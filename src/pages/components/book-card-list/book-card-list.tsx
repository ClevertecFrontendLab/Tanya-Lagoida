import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {StarComponent} from '../../common-components/stars/star-component';
import withoutCover from '../../images/icon-without-cover.svg';
import {LabelText} from '../../labels/labels';
import {
    EnteredText,
    NonCategory,
    StarLabel,
    StarsBoxBookCardTable
} from '../book-card-table/styles';
import {ButtonComponent} from '../button/button-component';

import {
    BookAuthorBlockList,
    BookCoverListViewContainer,
    BookNameBlockList,
    ContainerListView, ImgContainerList,
    NameList, RatingAndButtonList, RightContainerList
} from './styles';
import {useMediaQuery} from '../../hooks/use-media-query';
import {device} from '../../main/styles';
import {TBooksGenresType, TBooksType} from '../../../services/book-service-types';
import {EEndPoints} from '../../../config/endpoints';
import {dateFunc} from '../../../func/date-adding-zero-func';

type TProps = {
    dataBooks: TBooksType[]
    dataCategories: TBooksGenresType[]
    isDefaultSort: boolean
    enteredText: string
}

export const BookCardList: React.FC<TProps> = ({
    dataBooks,
    dataCategories,
    isDefaultSort,
    enteredText
}) => {
    const navigate = useNavigate();
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isTabletView = useMediaQuery(`${device.tablet}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    const {category} = useParams();
    const selectedCategory = dataCategories.find((bookCategory) => bookCategory.path === category);
    const [sortArray, setSortArray] = useState<TBooksType[]>(dataBooks);

    const filteredDataBooks: TBooksType[] = [...dataBooks].sort((a, b) => isDefaultSort ? b.rating - a.rating : a.rating - b.rating).filter((book) =>
        book.categories.find((categoryBook) => categoryBook === selectedCategory?.name)
    );
    const filteredDataAllBooks = [...dataBooks].sort((a, b) =>
        isDefaultSort ? b.rating - a.rating : a.rating - b.rating);

    const filteredDataAllBooksSearch = filteredDataAllBooks.filter((book) => book.title.toLowerCase().includes(enteredText.toLowerCase()))
    const filteredAndSearchBooks = filteredDataBooks.filter((book) => book.title.toLowerCase().includes(enteredText.toLowerCase()))

    if (filteredDataBooks.length === 0 && category !== 'all') {
        return <NonCategory>
            <LabelText
                data-test-id="empty-category"
                variantText={isMobileView ? 'medium18LS' : 'large'}>В этой категории
                книг ещё нет</LabelText>
        </NonCategory>;
    }

    if (filteredDataAllBooksSearch.length === 0 && filteredAndSearchBooks.length === 0) {
        return <NonCategory>
            <LabelText
                data-test-id='search-result-not-found'
                variantText={isMobileView ? 'medium18LS' : 'large'}>По запросу ничего не найдено</LabelText>
        </NonCategory>
    }

    const regex = new RegExp(`(${enteredText})`, 'gmiu');

    return (
        <>
            {
                (category === 'all' ? filteredDataAllBooksSearch : filteredAndSearchBooks)
                    .map((book: TBooksType) =>
                        <ContainerListView key={book.id} data-test-id="card" onClick={() =>
                            navigate(`/books/${category}/${book.id}`)}>
                            <BookCoverListViewContainer>
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
                            </BookCoverListViewContainer>
                            <RightContainerList>
                                <NameList>
                                    <BookNameBlockList>
                                        {
                                            book.title.split(regex).map((partOfTitle) => partOfTitle.toLowerCase() === enteredText.toLowerCase()
                                                ?
                                                <EnteredText>
                                                    <LabelText
                                                        data-test-id="highlight-matches"
                                                        variantText={isLaptopView ? 'large22LH' : isTabletView ? 'large24' : 'medium14Bold'}>
                                                        {partOfTitle}
                                                    </LabelText>
                                                </EnteredText>
                                                :
                                                <LabelText
                                                    variantText={isLaptopView ? 'large22LH' : isTabletView ? 'large24' : 'medium14Bold'}>
                                                    {partOfTitle}
                                                </LabelText>
                                            )
                                        }
                                    </BookNameBlockList>
                                    <BookAuthorBlockList>
                                        {
                                            book.authors.map((author) =>

                                                <LabelText
                                                    variantText={isMobileView ? 'small400' : 'medium16'}
                                                    key={author}>
                                                    {author}, &nbsp;
                                                </LabelText>)
                                        }
                                        <LabelText
                                            variantText={isLaptopView ? 'medium14Norm' : 'small400'}>
                                            {book.issueYear}
                                        </LabelText>
                                    </BookAuthorBlockList>
                                </NameList>
                                <RatingAndButtonList>
                                    {book.rating === null ?
                                        <StarLabel>
                                            <LabelText
                                                variantText="medium14Norm">ещё нет
                                                оценок</LabelText>
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
                                    <ButtonComponent
                                        status={book.booking ? 'booking'
                                            : book.delivery ? 'delivery'
                                                : 'inStock'}
                                        width={isMobileView ? '186px' : '174px'}
                                        height="40px"
                                    >
                                        <LabelText
                                            variantText="smallLS">{book.booking ? `Занята до ${dateFunc(book?.booking.dateOrder)}`
                                            : book.delivery ? 'Забронирована'
                                                : 'Забронировать'}
                                        </LabelText>

                                    </ButtonComponent>
                                </RatingAndButtonList>
                            </RightContainerList>
                        </ContainerListView>
                    )
            }
        </>

    );
};





