import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {EEndPoints} from '../../../config/endpoints';
import {dateFunc} from '../../../func/date-adding-zero-func';
import {TBooksGenresType, TBooksType} from '../../../services/book-service-types';
import {BookFilterSort} from '../../common-components/book-filter-sort';
import {StarComponent} from '../../common-components/stars/star-component';
import {useMediaQuery} from '../../hooks/use-media-query';
import withoutCover from '../../images/icon-without-cover.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';
import {ImgContainerList} from '../book-card-list/styles';
import {ButtonComponent} from '../button/button-component';

import {
    BookAuthorBlock, BookAuthorBlockContainer,
    BookCoverContainer,
    BookNameBlock, BookNameBlockContainer, ButtonContainer,
    ContainerTableView, EnteredText,
    Name, NonCategory, StarLabel, StarsBoxBookCardTable,
} from './styles';

type TProps = {
    dataBooks: TBooksType[]
    dataCategories: TBooksGenresType[]
    isDefaultSort: boolean
    enteredText: string
}
export const BookCardTable: React.FC<TProps> = ({
    dataBooks,
    dataCategories,
    isDefaultSort,
    enteredText
}) => {
    const navigate = useNavigate();
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    const regex = new RegExp(`(${enteredText})`, 'gmiu');
    const {category} = useParams();

    const sortBook = BookFilterSort  ({dataBooks, dataCategories, isDefaultSort, enteredText})


    if (sortBook[2].length === 0 && category !== 'all') {

        return <NonCategory>
            {isMobileView
                ?
                <div>
                    <LabelText
                        data-test-id='empty-category'
                        variantText={isMobileView ? 'medium18LS' : 'large'}>В этой категории книг ещё нет
                    </LabelText>
                </div>
            :
                <LabelText
                    data-test-id='empty-category'
                    variantText={isMobileView ? 'medium18LS' : 'large'}>В этой категории книг ещё нет</LabelText>
            }
        </NonCategory>;
    }

    if (sortBook[0].length === 0 && sortBook[1].length === 0) {

        return <NonCategory>
            {isMobileView
                ?
                <div>
                    <LabelText
                        data-test-id='search-result-not-found'
                        variantText={isMobileView ? 'medium18LS' : 'large'}>По запросу ничего не найдено
                    </LabelText>
                </div>
                :
                <LabelText
                    data-test-id='search-result-not-found'
                    variantText={isMobileView ? 'medium18LS' : 'large'}>По запросу ничего не найдено</LabelText>
            }
        </NonCategory>
    }

    return (
        <React.Fragment> {
            (category === 'all' ? sortBook[0] : sortBook[1])
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
                                    {
                                            book.title.split(regex).map((partOfTitle) => partOfTitle.toLowerCase() === enteredText.toLowerCase()
                                                ?
                                                <EnteredText>
                                                    <LabelText
                                                        data-test-id='highlight-matches'
                                                        variantText={isMobileView || isLaptopView ? 'medium14Bold' : 'smallBold'}>
                                                        {partOfTitle}
                                                    </LabelText>
                                                </EnteredText>
                                                :
                                                <LabelText
                                                    variantText={isMobileView || isLaptopView ? 'medium14Bold' : 'smallBold'}>
                                                    {partOfTitle}
                                                </LabelText>
                                            )
                                    }
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

        </React.Fragment>

    );
};
