import React, {ChangeEvent, useState} from 'react';

import {IconButton} from '../../common-components/icon-button/icon-button';
import iconSort from '../../images/icon-sort-ascending.svg';
import closeInput from '../../images/close-input.svg';
import {LabelText} from '../../labels/labels';
import searchBook from '../../images/search-book.svg';
import searchBookActive from '../../images/icon-search-active.svg';

import {
    ButtonCloseInput,
    IconButtonContainer, IconButtonSearchAndSortContainer,
    NavigationStyles,
    SearchAndSortContainer,
    SearchBookInput, SearchContainer,
    SortBookImg,
    SortBookInput
} from './styles';

type TProps = {
    isListView: boolean
    handleIsListView: (value: boolean) => void
    handleSortBooks: () => void
    isDefaultSort: boolean
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Navigation: React.FC<TProps> = ({isListView, handleIsListView, handleSortBooks, isDefaultSort, handleInputChange}) => {

    const [isSearchInputOpen, setIsSearchInputOpen] = useState<boolean>(false);


    const handleIconTableClick = (): void => {
        handleIsListView(false);
    };
    const handleIconListClick = (): void => {
        handleIsListView(true);
    };
    const handleChangeSearchInput = (): void => {
        setIsSearchInputOpen((previousValue) => !previousValue);
    };
    const handleCloseInput = (): void => {
        setIsSearchInputOpen((previousValue) => !previousValue);
    };


    return (
        <NavigationStyles>
            <SearchAndSortContainer>
                <SearchContainer>
                    <SearchBookInput
                        // onBlur={activateViewMode}
                        isSearchInputOpen={isSearchInputOpen}
                        onChange={handleInputChange}
                        data-test-id='input-search'
                        placeholder="Поиск книги или автора…"/>
                    <img src={searchBook} alt=""/>
                    <img src={searchBookActive} alt=""/>
                </SearchContainer>
                <SortBookInput
                    data-test-id='sort-rating-button'
                    onClick={handleSortBooks}>
                    <SortBookImg
                        src={iconSort} alt=""
                        isDefaultSort={isDefaultSort}/>
                    <LabelText
                        variantText="medium14Norm">По рейтингу</LabelText>
                </SortBookInput>
            </SearchAndSortContainer>
            <IconButtonSearchAndSortContainer>
                <IconButton
                    variantOfIcons="secondary"
                    typeSvgIcons="buttonIconSearch"
                    onClick={handleChangeSearchInput}
                    isSearchInputOpen={isSearchInputOpen}
                    data-test-id="button-search-open"/>
                <IconButton
                    variantOfIcons="secondary"
                    typeSvgIcons="buttonIconSort"
                    isSearchInputOpen={isSearchInputOpen}
                    onClick={handleSortBooks}
                    isDefaultSort={isDefaultSort}
                />
                <SearchContainer>
                    <SearchBookInput
                        isSearchInputOpen={isSearchInputOpen}
                        placeholder="Поиск книги или автора…"
                        onChange={handleInputChange}
                        data-test-id="input-search"/>
                    <ButtonCloseInput
                        isSearchInputOpen={isSearchInputOpen}
                        onClick={handleCloseInput}
                        data-test-id="button-search-close">
                        <img src={closeInput} alt=""/>
                    </ButtonCloseInput>
                </SearchContainer>
            </IconButtonSearchAndSortContainer>
            <IconButtonContainer>
                <IconButton
                    isSearchInputOpen={isSearchInputOpen}
                    onClick={handleIconTableClick}
                    variantOfIcons={isListView ? 'secondary' : 'primary'}
                    typeSvgIcons="buttonIconTable"
                    data-test-id="button-menu-view-window"/>
                <IconButton
                    isSearchInputOpen={isSearchInputOpen}
                    onClick={handleIconListClick}
                    variantOfIcons={isListView ? 'primary' : 'secondary'}
                    typeSvgIcons="buttonIconList"
                    data-test-id="button-menu-view-list"/>
            </IconButtonContainer>
        </NavigationStyles>
    );
};
