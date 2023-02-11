import React from 'react';

import { TBooks} from '../../constants/constants-book';
import {booksCategories} from '../../constants/constants-menu';
import {useMediaQuery} from '../../hooks/use-media-query';
import chevron from '../../images/chevron.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {BreadcrumbsStyles, Container, ContainerForChevron} from './styles';

type TProps = {
    book?: TBooks
}

export const Breadcrumbs: React.FC<TProps> = ({book}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <BreadcrumbsStyles>
            <Container>
                <LabelText
                    variantText={isMobileView ? 'small500' : 'medium14Norm'}> {booksCategories[1].name} </LabelText>
                <ContainerForChevron src={chevron}/>
                <LabelText
                    variantText={isMobileView ? 'small500' : 'medium14Norm'}> {book?.bookName} </LabelText>
            </Container>
        </BreadcrumbsStyles>);
};

