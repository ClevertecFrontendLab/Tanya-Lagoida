import React, {ChangeEvent, useState} from 'react';

import {IconButton} from '../../common-components/icon-button/icon-button';
import {useMediaQuery} from '../../hooks/use-media-query';
import closeInput from '../../images/close-input.svg';
import {Lupa} from '../../images/icon-search-active';
import iconSort from '../../images/icon-sort-ascending.svg';
import {LabelText} from '../../labels/labels';
import {device} from '../../main/styles';
import {useSort} from '../layout/layout';

import {
    ButtonCloseInput,
    IconButtonContainer, IconButtonSearchAndSortContainer, IconDiv,
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
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Navigation: React.FC<TProps> = ({
    isListView,
    handleIsListView,
    handleSortBooks,
    handleInputChange
}) => {

    const [isSearchInputOpen, setIsSearchInputOpen] = useState<boolean>(false);
    const isMobileView = useMediaQuery(`${device.mobileS}`);
    const isTabletView = useMediaQuery(`${device.tablet}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    const {isDefaultSort} =  useSort()

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
            {isTabletView || isLaptopView
                ?
                <SearchAndSortContainer>
                    <SearchContainer>
                        <SearchBookInput
                            type="text"
                            isSearchInputOpen={isSearchInputOpen}
                            autoFocus={true}
                            onChange={handleInputChange}
                            data-test-id="input-search"
                            placeholder="Поиск книги или автора…"/>
                        <Lupa />
                    </SearchContainer>
                    <SortBookInput
                        data-test-id="sort-rating-button"
                        onClick={handleSortBooks}>
                        <SortBookImg
                            src={iconSort} alt=""
                            isDefaultSort={isDefaultSort}/>
                        <LabelText
                            variantText="medium14Norm">По рейтингу</LabelText>
                    </SortBookInput>
                </SearchAndSortContainer>
                : null
            }
            {isMobileView
                ?
                <IconButtonSearchAndSortContainer>
                    <IconButton
                        variantOfIcons="secondary"
                        typeSvgIcons="buttonIconSearch"
                        onClick={handleChangeSearchInput}
                        isSearchInputOpen={isSearchInputOpen}
                        data-test-id="button-search-open"
                    />
                    <IconDiv isDefaultSort={isDefaultSort}>
                        <IconButton
                            variantOfIcons="secondary"
                            typeSvgIcons="buttonIconSort"
                            isSearchInputOpen={isSearchInputOpen}
                            onClick={handleSortBooks}
                        />
                    </IconDiv>

                    <SearchContainer>
                        <SearchBookInput
                            type="text"
                            autoFocus={true}
                            isSearchInputOpen={isSearchInputOpen}
                            placeholder="Поиск книги или автора…"
                            onChange={handleInputChange}
                            data-test-id="input-search"
                        />
                        <ButtonCloseInput
                            isSearchInputOpen={isSearchInputOpen}
                            onClick={handleCloseInput}
                            data-test-id="button-search-close">
                            <img src={closeInput} alt=""/>
                        </ButtonCloseInput>
                    </SearchContainer>
                </IconButtonSearchAndSortContainer>
                : null
            }
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
