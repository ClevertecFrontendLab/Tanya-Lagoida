import React, {ChangeEvent, useState} from 'react';

import {IconButton} from '../../common-components/icon-button/icon-button';
import iconSort from '../../images/icon-sort-ascending.svg';
import closeInput from '../../images/close-input.svg';
import {LabelText} from '../../labels/labels';

import {
    ButtonCloseInput,
    IconButtonContainer, IconButtonSearchAndSortContainer, IconDiv,
    NavigationStyles,
    SearchAndSortContainer,
    SearchBookInput, SearchContainer,
    SortBookImg,
    SortBookInput
} from './styles';
import {useMediaQuery} from '../../hooks/use-media-query';
import {device} from '../../main/styles';
import {useSort} from '../layout/layout';

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
    const {isDefaultSort, updateSort} =  useSort()

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
            {!isMobileView
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

                        <svg width="16" height="16" viewBox="0 0 16 16"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M7.33337 2.66671C4.75605 2.66671 2.66671 4.75605 2.66671 7.33337C2.66671 9.9107 4.75605 12 7.33337 12C9.9107 12 12 9.9107 12 7.33337C12 4.75605 9.9107 2.66671 7.33337 2.66671ZM1.33337 7.33337C1.33337 4.01967 4.01967 1.33337 7.33337 1.33337C10.6471 1.33337 13.3334 4.01967 13.3334 7.33337C13.3334 10.6471 10.6471 13.3334 7.33337 13.3334C4.01967 13.3334 1.33337 10.6471 1.33337 7.33337Z"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.6286 10.6286C10.889 10.3683 11.3111 10.3683 11.5714 10.6286L14.4714 13.5286C14.7318 13.789 14.7318 14.2111 14.4714 14.4714C14.2111 14.7318 13.789 14.7318 13.5286 14.4714L10.6286 11.5714C10.3683 11.3111 10.3683 10.889 10.6286 10.6286Z"/>
                            <defs>
                                <linearGradient id="paint0_linear_20150_3410" x1="7.11725"
                                                y1="-20.9791" x2="-39.2609" y2="15.8034"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F83600"/>
                                    <stop offset="1" stopColor="#F9D423"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_20150_3410" x1="12.4738"
                                                y1="2.56199" x2="-3.8874" y2="15.538"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F83600"/>
                                    <stop offset="1" stopColor="#F9D423"/>
                                </linearGradient>
                            </defs>
                        </svg>
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
