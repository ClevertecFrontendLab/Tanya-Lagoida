import React, { useState } from 'react';
import { Navigate, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

import { LabelText } from '../../labels/labels';
import menu from '../../images/stroke.svg';

import {
    BookCategoriesStyle,
    BooksCategoriesContainer, CategoryAmount,
    MenuStyles, MenuTermsContainer, ProfileAndExitContainer,
    RulesAndContract,
    ShowcaseBooksBox, ShowMenu
} from './styles';
import { useMediaQuery } from '../../hooks/use-media-query';
import { device } from '../../main/styles';
import {
    useGettingAListOfBookGenresQueryState,
    useGettingAListOfBooksQueryState
} from '../../../services/book-service';
import { categoryAmountCount } from '../../../func/category-amount-count';
import { useAppDispatch } from '../../../store/store';
import { userReceived } from '../../../store/auth-slice';

type TMenuProps = {
    setIsMenuCollapsed?: (value: boolean) => void
}

export const Menu: React.FC<TMenuProps> = ({ setIsMenuCollapsed }) => {
    const { category } = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    const { data: dataCategories = [], isLoading: isLoadingCategories, isFetching: isFetchingCategories, isError: isErrorCategories } = useGettingAListOfBookGenresQueryState();
    const { data: dataBooks = [], isLoading: isLoadingBooks, isFetching: isFetchingBooks, isError: isErrorBooks } = useGettingAListOfBooksQueryState();
    const mutateMenu = [{ name: 'Все книги', path: 'all', id: 999999 }, ...dataCategories];

    const initialIsMenuOpenValue = location.pathname.includes('/books') || location.pathname === '/';

    const [isMenuOpen, setMenuOpen] = useState<boolean>(initialIsMenuOpenValue);
    const handleHideBookMenu = (): void => {
        setMenuOpen((previousValue) => !previousValue);
    };
    const handleCloseMenu = (): void => {
        if (setIsMenuCollapsed) {
            setIsMenuCollapsed(true);
        }
    };
    const handleCloseBookMenu = (): void => {
        setMenuOpen(false);
    };

    const handleFunction = (): void => {
        handleCloseMenu();
        handleCloseBookMenu();
    };

    const handleExitFromUser = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch(userReceived({user: null, isAuth: false}));
        navigate('/auth');
    };


    const amount = categoryAmountCount(dataBooks, dataCategories);

    return (
        <MenuStyles>
            <NavLink to="/books/all">
                <ShowcaseBooksBox
                    onClick={handleHideBookMenu}
                    isActive={location.pathname.includes('/books')}
                    data-test-id={isLaptopView ? 'navigation-showcase' : 'burger-showcase'}
                >
                    <LabelText variantText="medium18">Витрина книг</LabelText>
                    <ShowMenu
                        isMenuOpen={isMenuOpen}
                        src={menu} alt=""
                        isActive={location.pathname.includes('/books')}
                        isLoadingCategories={isLoadingCategories}
                        isFetchingCategories={isFetchingCategories}
                        isErrorCategories={isErrorCategories}
                        isLoadingBooks={isLoadingBooks}
                        isFetchingBooks={isFetchingBooks}
                        isErrorBooks={isErrorBooks}
                    />
                </ShowcaseBooksBox>
            </NavLink>
            <BooksCategoriesContainer
                isMenuOpen={isMenuOpen}
                isLoadingCategories={isLoadingCategories}
                isFetchingCategories={isFetchingCategories}
                isErrorCategories={isErrorCategories}
                isLoadingBooks={isLoadingBooks}
                isFetchingBooks={isFetchingBooks}
                isErrorBooks={isErrorBooks}
            >
                {(!isLoadingCategories && !isFetchingCategories && !isErrorCategories && !isLoadingBooks && !isFetchingBooks && !isErrorBooks) &&
                mutateMenu.map((bookCategory) =>
                    <NavLink key={bookCategory.id} to={`/books/${bookCategory.path}`}
                             onClick={handleCloseMenu}
                             data-test-id={bookCategory.path === 'all' ?
                                 (isLaptopView ? 'navigation-books' : 'burger-books') : null}>
                        <div>
                            <BookCategoriesStyle
                                isActive={category === bookCategory.path}>
                                <LabelText
                                    data-test-id={isLaptopView ? `navigation-${bookCategory.path}` : `burger-${bookCategory.path}`}
                                    variantText={category === bookCategory.path ? 'medium18LS' : 'medium16'}>{bookCategory.name}</LabelText>
                            </BookCategoriesStyle>
                            {
                                bookCategory.path !== 'all' &&
                                <CategoryAmount
                                >
                                    <LabelText
                                        data-test-id={isLaptopView ? `navigation-book-count-for-${bookCategory.path}` : `burger-book-count-for-${bookCategory.path}`}
                                        variantText="medium14">{amount[bookCategory.name].length}</LabelText>
                                </CategoryAmount>
                            }

                        </div>
                    </NavLink>
                )
                }
            </BooksCategoriesContainer>
            <MenuTermsContainer>
                <NavLink to="/terms" onClick={handleFunction}
                         data-test-id={isLaptopView ? 'navigation-terms' : 'burger-terms'}>
                    <RulesAndContract isActive={location.pathname === '/terms'}>
                        <LabelText variantText="medium18LS">Правила пользования</LabelText>
                    </RulesAndContract>
                </NavLink>
                <NavLink to="/contract" onClick={handleFunction}
                         data-test-id={isLaptopView ? 'navigation-contract' : 'burger-contract'}>
                    <RulesAndContract isActive={location.pathname === '/contract'}>
                        <LabelText variantText="medium18LS">Договор оферты</LabelText>
                    </RulesAndContract>
                </NavLink>
            </MenuTermsContainer>
            <ProfileAndExitContainer>
                <LabelText variantText="medium18LS">Профиль</LabelText>
                <NavLink to="/auth">
                    <div onClick={handleExitFromUser}>
                        <LabelText variantText="medium18LS" data-test-id='exit-button'>Выход</LabelText>
                    </div>
                </NavLink>
            </ProfileAndExitContainer>
        </MenuStyles>
    );
};





