import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {StarComponent} from '../../common-components/stars/star-component';
import withoutCover from '../../images/icon-without-cover.svg';
import {LabelText} from '../../labels/labels';
import {StarLabel, StarsBoxBookCardTable} from '../book-card-table/styles';
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
import { TBooksType } from '../../../services/book-service-types';
import {EEndPoints} from '../../../config/endpoints';
import {dateFunc} from '../../../func/date-adding-zero-func';

type TProps = {
    dataBooks: TBooksType[]
}

export const BookCardList: React.FC<TProps> = ({dataBooks}) => {
    const navigate = useNavigate();
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isTabletView = useMediaQuery(`${device.tablet}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    const {category} = useParams();

    return (
        <React.Fragment>{
            dataBooks.map((book: TBooksType) =>
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
                                :  <ImgContainerList
                                    src={withoutCover}
                                    alt=""
                                />
                        }
                    </BookCoverListViewContainer>
                    <RightContainerList>
                        <NameList>
                            <BookNameBlockList>
                                <LabelText
                                    variantText={isLaptopView ? 'large22LH' : isTabletView ? 'large24' : 'medium14Bold'}>{book.title}</LabelText>
                            </BookNameBlockList>
                            <BookAuthorBlockList>
                                {
                                    book.authors.map((author) =>
                                        <>
                                            <LabelText
                                                variantText={isMobileView ? 'small400' : 'medium16'}
                                                key={author}>
                                                {author},
                                            </LabelText> <span>      </span> </>)
                                }
                                <span>      </span>
                                <LabelText variantText={isLaptopView ? 'medium14Norm' : 'small400'}>
                                    {book.issueYear}
                                </LabelText>
                            </BookAuthorBlockList>
                        </NameList>
                        <RatingAndButtonList>
                            {book.rating === undefined ?
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
        }</React.Fragment>
    );
};





