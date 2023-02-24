import {RefObject, useEffect} from 'react';

type TUseOutsideClick = {
    menuRef: RefObject<HTMLDivElement>
    buttonRef: RefObject<HTMLDivElement>
    handler: () => void
    isMenuCollapsed: boolean
};

export const useOutsideClick = ({menuRef, buttonRef, handler, isMenuCollapsed}: TUseOutsideClick) => {

    useEffect(() => {
        const prevDocumentOverflowStyle = document.body.style.overflow;
        const prevDocumentPointerEventsStyle = document.body.style.pointerEvents;
        const handleClickOutside = (event: MouseEvent) => {
            function assertIsNode(e: EventTarget | null): asserts e is Node {
                if (!e || !('nodeType' in e)) {
                    throw new Error('Node expected');
                }
            }
            assertIsNode(event.target);
            if (
                menuRef.current
                && buttonRef.current
                && !menuRef.current.contains(event.target)
                && !buttonRef.current.contains(event.target)
            ) {
                handler();
            }
        };

        if (!isMenuCollapsed) {
            if (menuRef.current && buttonRef.current) {
                document.body.style.overflow = 'hidden';
                document.body.style.pointerEvents = 'none';
                // eslint-disable-next-line no-param-reassign
                menuRef.current.style.pointerEvents = 'auto';
                // eslint-disable-next-line no-param-reassign
                buttonRef.current.style.pointerEvents = 'auto';
            }
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            if (!isMenuCollapsed) {
                document.removeEventListener('click', handleClickOutside);
            }
            document.body.style.overflow = prevDocumentOverflowStyle;
            document.body.style.pointerEvents = prevDocumentPointerEventsStyle;
        }
    }, [buttonRef, menuRef, handler, isMenuCollapsed]);

};
