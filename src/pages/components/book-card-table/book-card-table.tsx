import React from 'react';
import {useNavigate} from 'react-router-dom';

import {StarComponent} from '../../common-components/stars/star-component';
import {booksArray, TBooks} from '../../constants/constants-book';
import {useMediaQuery} from '../../hooks/use-media-query';
import starWithoutColor from '../../images/icon_star-without-color.png';
import starImg from '../../images/icon-star-yellow.png';
import withoutCover from '../../images/icon-without-cover.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';
import {ButtonComponent} from '../button/button-component';

import {
    BookAuthorBlock,
    BookCoverContainer,
    BookNameBlock, ButtonContainer,
    ContainerTableView, ImgContainer,
    Name, StarLabel, StarsBoxBookCardTable,
} from './styles';
import {TBooksType} from '../../../services/book-service-types';

type TProps = {
    dataBooks: Array<TBooksType>
}
export const BookCardTable: React.FC<TProps> = ({dataBooks}) => {
    const navigate = useNavigate();
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isLaptopView = useMediaQuery( `${device.laptopL}`);

    return (
        <React.Fragment>{
            booksArray.map((book: TBooks) =>
                <ContainerTableView key={book.bookId} data-test-id="card" onClick={() =>
                    navigate(`/books/${book.category}/${book.bookId}`)}>
                    <BookCoverContainer>
                        <ImgContainer cover={book.cover}
                                      src={book.cover ? book.cover[0].img : withoutCover}
                                      alt=""/>
                    </BookCoverContainer>
                    {book.rating === null ?
                        <StarLabel>
                            <LabelText variantText="medium14Norm">ещё нет оценок</LabelText>
                        </StarLabel>
                        :
                        <StarsBoxBookCardTable>
                            <StarComponent src={starImg} width="24px" height="24px" alt=""/>
                            <StarComponent src={starImg} width="24px" height="24px" alt=""/>
                            <StarComponent src={starImg} width="24px" height="24px" alt=""/>
                            <StarComponent src={starImg} width="24px" height="24px" alt=""/>
                            <StarComponent src={starWithoutColor} width="24px" height="24px"
                                           alt=""/>
                        </StarsBoxBookCardTable>
                    }
                    <Name>
                        <BookNameBlock>
                            <LabelText
                                variantText={isMobileView || isLaptopView  ? 'medium14Bold' : 'smallBold'}>{book.bookName}</LabelText>
                        </BookNameBlock>
                        <BookAuthorBlock>
                            <LabelText variantText={isLaptopView  ? 'medium14Norm' : 'small400'}>{book.bookAuthor}</LabelText>
                        </BookAuthorBlock>
                    </Name>
                    <ButtonContainer>
                        <ButtonComponent status={book.status} width={isMobileView  ? '256px' : '166px'} height="40px">
                            <LabelText
                                variantText='smallLS'>{book.status === 'inStock' ? 'Забронировать' :
                                book.status === 'isUsed' ? 'Занята до 03.05' : 'Забронирована'}</LabelText>
                        </ButtonComponent>
                    </ButtonContainer>
                </ContainerTableView>
            )
        }</React.Fragment>
    );
};


