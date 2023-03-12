import React, {useRef} from 'react';

import {useOutsideClick} from '../../hooks/use-click-outside';

import {Menu} from './menu';
import {MenuContainer} from './styles';

type TProps = {
    buttonRef: React.RefObject<HTMLDivElement>
    handleClickOutside: () => void
    setIsMenuCollapsed: (value: boolean) => void
    isMenuCollapsed: boolean
}

export const MenuBurgerContainer:React.FC<TProps> = ({
    buttonRef,
    handleClickOutside,
    setIsMenuCollapsed,
    isMenuCollapsed
}) => {
    const menuRef = useRef(null);

    useOutsideClick({menuRef, buttonRef, handler: handleClickOutside, isMenuCollapsed});

    return (
            <MenuContainer data-test-id="burger-navigation"
                           ref={menuRef}
                           isMenuCollapsed={isMenuCollapsed}>
                <Menu setIsMenuCollapsed={setIsMenuCollapsed}/>
            </MenuContainer>
    );
};
