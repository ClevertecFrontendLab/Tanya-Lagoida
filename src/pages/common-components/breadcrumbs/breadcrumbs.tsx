import React from 'react';

import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { useMediaQuery } from '../../hooks/use-media-query';
import { LabelText } from '../../labels/labels';
import { device } from '../../main/styles';

import { BreadcrumbsStyles, ChevronContainer, Container } from './styles';
import {
    useGettingAListOfBookGenresQueryState,
    useGettingAListOfBooksByIdQueryState
} from '../../../services/book-service';


export const Breadcrumbs = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const { data: dataCategories = [] } = useGettingAListOfBookGenresQueryState();
    const {bookId} = useParams();
    const id = bookId === undefined ? bookId : +bookId
    const {data: dataBookById} = useGettingAListOfBooksByIdQueryState(id ?? skipToken);
    const mutateMenu = [{ name: 'Все книги', path: 'all', id: 999999 }, ...dataCategories];
    const { category } = useParams();
    const selectedCategory = mutateMenu.find((bookCategory) => bookCategory.path === category);

    return (
        <BreadcrumbsStyles>
            <Container>
                <LabelText
                    variantText={isMobileView ? 'small500' : 'medium14Norm'}> {selectedCategory?.name} </LabelText>
                <ChevronContainer>
                    <LabelText
                        variantText={isMobileView ? 'small500' : 'medium14Norm'}> / </LabelText>
                </ChevronContainer>
                <LabelText
                    variantText={isMobileView ? 'small500' : 'medium14Norm'}> {dataBookById?.title} </LabelText>
            </Container>
        </BreadcrumbsStyles>);
};

