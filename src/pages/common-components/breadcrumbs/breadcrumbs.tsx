import React from 'react';

import {useParams} from 'react-router-dom';
import {useMediaQuery} from '../../hooks/use-media-query';
import chevron from '../../images/chevron.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {BreadcrumbsStyles, Container, ContainerForChevron} from './styles';
import {TBooksByIdType} from '../../../services/book-service-types';
import {useGettingAListOfBookGenresQueryState} from '../../../services/book-service';



type TProps = {
    book?: TBooksByIdType
}

export const Breadcrumbs: React.FC<TProps> = ({book}) => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const { data: dataCategories = []} = useGettingAListOfBookGenresQueryState();
    const mutateMenu = [{name: 'Все книги', path: 'all', id: 999999}, ...dataCategories]
    const {category} = useParams();
    const selectedCategory = mutateMenu.find((bookCategory) => bookCategory.path === category)

    return (
        <BreadcrumbsStyles>
            <Container>
                    <LabelText
                        variantText={isMobileView ? 'small500' : 'medium14Norm'}> {selectedCategory?.name}</LabelText>
                <ContainerForChevron src={chevron}/>
                <LabelText
                    variantText={isMobileView ? 'small500' : 'medium14Norm'}> {book?.title} </LabelText>
            </Container>
        </BreadcrumbsStyles>);
};

