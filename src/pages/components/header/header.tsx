import React, {useRef, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import avatar from '../../images/avatar.jpg';
import cleverLand from '../../images/cleverland.svg';
import logo from '../../images/logo-clevertec_40.svg';
import {LabelText} from '../../labels/labels';

import {
    Avatar, BurgerMenu,
    CleverLand,
    HeaderStyles, HeaderStylesContainer,
    Hello, Library, LineOne, LineThree, LineTwo,
    Logo,
    LogoAndLibrary,
    LogoBox,
    Person, PersonContainer, ProfileAndExit
} from './styles';
import {device} from '../../main/styles';
import {useMediaQuery} from '../../hooks/use-media-query';
import {MenuBurgerContainer} from '../menu/menu-burger-container';
import { ProfileAndExitContainer } from '../menu/styles';
import { userReceived } from '../../../store/auth-slice';
import { useAppDispatch } from '../../../store/store';


export const Header = () => {
    const isNotMobileView = useMediaQuery(`${device.tablet}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(true);
    const [isPersonMenuClose, setIsPersonMenuClose] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleCollapseMenu = (): void => {
        setIsMenuCollapsed((previousValue) => !previousValue);
    };
    const handleClickOutside = (): void => {
        setIsMenuCollapsed(true);
    };
    const handleExitFromUser = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch(userReceived({user: null, isAuth: false}));
        navigate('/auth');
    };

    const handleOpenPersonMenu = (): void => {
        setIsPersonMenuClose((previousValue) => !previousValue);
    }
    const buttonRef = useRef(null);

    return (

        <HeaderStylesContainer isPersonMenuClose={isPersonMenuClose}>
        <HeaderStyles>
            <LogoAndLibrary>
                <NavLink to="/">
                    <LogoBox>
                        <Logo src={logo} alt=""/>
                        <CleverLand src={cleverLand} alt=""/>
                    </LogoBox>
                </NavLink>
                <div>
                    <BurgerMenu onClick={handleCollapseMenu}
                                isMenuCollapsed={isMenuCollapsed}
                                data-test-id="button-burger"
                                ref={buttonRef}>
                        <LineOne isMenuCollapsed={isMenuCollapsed}/>
                        <LineTwo isMenuCollapsed={isMenuCollapsed}/>
                        <LineThree isMenuCollapsed={isMenuCollapsed}/>
                    </BurgerMenu>
                    {!isLaptopView
                        ? <MenuBurgerContainer
                        buttonRef={buttonRef}
                        handleClickOutside={handleClickOutside}
                        setIsMenuCollapsed={setIsMenuCollapsed}
                        isMenuCollapsed={isMenuCollapsed}
                    /> : null}
                </div>
                <Library>
                    <LabelText
                        variantText={isNotMobileView ? 'large' : 'medium18LS'}>Библиотека</LabelText>
                </Library>
            </LogoAndLibrary>
            <PersonContainer>
                <Person onClick={handleOpenPersonMenu}>
                    <Hello>
                        <LabelText variantText="medium14Bold">Привет, Иван!</LabelText>
                    </Hello>
                    <Avatar src={avatar} alt=""/>
                </Person>
                <ProfileAndExit isPersonMenuClose={isPersonMenuClose}>
                    <LabelText variantText="medium18LS">Профиль</LabelText>
                    <NavLink to="/auth">
                        <div onClick={handleExitFromUser}>
                            <LabelText variantText="medium18LS">Выход</LabelText>
                        </div>
                    </NavLink>
                </ProfileAndExit>
            </PersonContainer>

        </HeaderStyles>
        </HeaderStylesContainer>
    );
};



