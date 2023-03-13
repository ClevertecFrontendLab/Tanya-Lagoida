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
        <React.Fragment>
            {
                (category === 'all' ? sortBook[0] : sortBook[1])
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
        </React.Fragment>
    );
};





