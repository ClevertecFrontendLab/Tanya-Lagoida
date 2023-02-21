import React from 'react';

import {useNavigate, useParams} from 'react-router-dom';
import {skipToken} from '@reduxjs/toolkit/query';
import {useMediaQuery} from '../../hooks/use-media-query';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';

import {BreadcrumbsStyles, CategoryContainer, ChevronContainer, Container} from './styles';
import {
    useGettingAListOfBookGenresQueryState,
    useGettingAListOfBooksByIdQueryState, useGettingAListOfBooksQuery
} from '../../../services/book-service';


export const Breadcrumbs = () => {
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const {data: dataCategories = []} = useGettingAListOfBookGenresQueryState();
    const {bookId} = useParams();
    const id = bookId === undefined ? bookId : +bookId;
    const {data: dataBookById} = useGettingAListOfBooksByIdQueryState(id ?? skipToken);
    const mutateMenu = [{name: 'Все книги', path: 'all', id: 999999}, ...dataCategories];
    const {category} = useParams();
    const selectedCategory = mutateMenu.find((bookCategory) => bookCategory.path === category);
    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate(`/books/${category}`);
    }

    return (
        <BreadcrumbsStyles>
            <Container>
                <CategoryContainer>
                    <LabelText
                        data-test-id='breadcrumbs-link'
                        onClick={handleMainPage}
                        variantText={isMobileView ? 'small500' : 'medium14Norm'}> {selectedCategory?.name} </LabelText>
                </CategoryContainer>
                <ChevronContainer>
                    <LabelText
                        variantText={isMobileView ? 'small500' : 'medium14Norm'}>/</LabelText>
                </ChevronContainer>
                <LabelText
                    data-test-id='book-name'
                    variantText={isMobileView ? 'small500' : 'medium14Norm'}> {dataBookById?.title} </LabelText>
            </Container>
        </BreadcrumbsStyles>);
};

