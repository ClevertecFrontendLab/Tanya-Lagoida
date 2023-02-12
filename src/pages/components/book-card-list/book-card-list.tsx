import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {StarComponent} from '../../common-components/stars/star-component';
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
import { TBooksType } from '../../../services/book-service-types';
import {EEndPoints} from '../../../config/endpoints';

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
                                    <LabelText variantText={isMobileView ? 'small400' : 'medium16'} key={author}>
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
                            <ButtonComponent
                                status={book.booking ? 'booking'
                                    : book.delivery ? 'delivery'
                                    : 'inStock'}
                                width={isMobileView ? '186px' : '174px'}
                                height="40px"
                            >
                                <LabelText
                                    variantText="smallLS">{book.booking ? 'Забронирована'
                                    : book.delivery ? 'Занята до 03.05'
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





