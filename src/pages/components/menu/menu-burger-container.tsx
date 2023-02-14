import React, {useRef} from 'react';
import {MenuContainer} from './styles';
import {Menu} from './menu';
import {useOutsideClick} from '../../hooks/use-click-outside';

type TProps = {
    buttonRef: React.RefObject<any>
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
