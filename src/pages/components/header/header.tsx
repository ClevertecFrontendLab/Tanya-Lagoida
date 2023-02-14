import React, {useRef, useState} from 'react';
import {NavLink} from 'react-router-dom';

import avatar from '../../images/avatar.jpg';
import cleverLand from '../../images/cleverland.svg';
import logo from '../../images/logo-clevertec_40.svg';
import {LabelText} from '../../labels/labels';

import {
    Avatar, BurgerMenu,
    CleverLand,
    HeaderStyles,
    Hello, Library, LineOne, LineThree, LineTwo,
    Logo,
    LogoAndLibrary,
    LogoBox,
    Person
} from './styles';
import {device} from '../../main/styles';
import {useMediaQuery} from '../../hooks/use-media-query';
import {MenuBurgerContainer} from '../menu/menu-burger-container';


export const Header = () => {
    const isNotMobileView = useMediaQuery(`${device.tablet}`);
    const isLaptopView = useMediaQuery(`${device.laptopL}`);
    const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(true);


    const handleCollapseMenu = () => {
        setIsMenuCollapsed((previousValue) => !previousValue);
    };
    const handleClickOutside = () => {
        setIsMenuCollapsed(true);
    };
    const buttonRef = useRef(null);

    return (
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
            <Person>
                <Hello>
                    <LabelText variantText="medium14Bold">Привет, Иван!</LabelText>
                </Hello>
                <Avatar src={avatar} alt=""/>
            </Person>
        </HeaderStyles>
    );
};



