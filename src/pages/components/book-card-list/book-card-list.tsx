import React from 'react';
import {useNavigate} from 'react-router-dom';

import {StarComponent} from '../../common-components/stars/star-component';
import {booksArray, TBooks} from '../../constants/constants-book';
import starWithoutColor from '../../images/icon_star-without-color.png';
import starImg from '../../images/icon-star-yellow.png';
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
import {TBooksType} from '../../../services/book-service-types';

type TProps = {
    dataBooks: Array<TBooksType>
}

export const BookCardList: React.FC<TProps> = ({dataBooks}) => {
    const navigate = useNavigate();
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isTabletView = useMediaQuery(`${device.tablet}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);

    return (
        <React.Fragment>{
            dataBooks.map((book: TBooksType) =>
                <ContainerListView key={book.id} data-test-id="card" onClick={() =>
                    navigate(`/books/${book.category}/${book.id}`)}>
                    <BookCoverListViewContainer>
                        <ImgContainerList book={book}
                                          src={book.image.url ? book?.image.url : withoutCover }
                                          alt=""/>
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
                                    <LabelText variantText={isMobileView ? 'small400' : 'medium16'}>
                                        {author}
                                    </LabelText> )
                                }

                            </BookAuthorBlockList>
                        </NameList>
                        <RatingAndButtonList>
                            {book.rating === undefined ?
                                <StarLabel>
                                    <LabelText variantText="medium14Norm">ещё нет оценок</LabelText>
                                </StarLabel>
                                :
                                <StarsBoxBookCardTable>
                                    <StarComponent src={starImg}
                                                   width={isMobileView ? '16px' : '24px'}
                                                   height={isMobileView ? '16px' : '24px'} alt=""/>
                                    <StarComponent src={starImg}
                                                   width={isMobileView ? '16px' : '24px'}
                                                   height={isMobileView ? '16px' : '24px'} alt=""/>
                                    <StarComponent src={starImg}
                                                   width={isMobileView ? '16px' : '24px'}
                                                   height={isMobileView ? '16px' : '24px'} alt=""/>
                                    <StarComponent src={starImg}
                                                   width={isMobileView ? '16px' : '24px'}
                                                   height={isMobileView ? '16px' : '24px'} alt=""/>
                                    <StarComponent src={starWithoutColor}
                                                   width={isMobileView ? '16px' : '24px'}
                                                   height={isMobileView ? '16px' : '24px'}
                                                   alt=""/>
                                </StarsBoxBookCardTable>
                            }
                            <ButtonComponent status={book.status}
                                             width={isMobileView ? '186px' : '174px'} height="40px">
                                <LabelText
                                    variantText="smallLS">{book.status === 'inStock' ? 'Забронировать' :
                                    book.status === 'isUsed' ? 'Занята до 03.05' : 'Забронирована'}</LabelText>

                            </ButtonComponent>
                        </RatingAndButtonList>
                    </RightContainerList>
                </ContainerListView>
            )
        }</React.Fragment>
    );
};





