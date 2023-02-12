import React from 'react';

import {useMediaQuery} from '../../hooks/use-media-query';
import chevron from '../../images/chevron.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {BreadcrumbsStyles, Container, ContainerForChevron} from './styles';
import {TBooksByIdType} from '../../../services/book-service-types';


type TProps = {
    book?: TBooksByIdType
}

export const Breadcrumbs: React.FC<TProps> = ({book}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);

    return (
        <BreadcrumbsStyles>
            <Container>
                <LabelText
                    variantText={isMobileView ? 'small500' : 'medium14Norm'}> {book?.categories[0]} </LabelText>
                <ContainerForChevron src={chevron}/>
                <LabelText
                    variantText={isMobileView ? 'small500' : 'medium14Norm'}> {book?.title} </LabelText>
            </Container>
        </BreadcrumbsStyles>);
};

