import styled from 'styled-components';

import {labelVariants} from '../../labels/labels';
import {device} from '../../main/styles';
import {EColors} from '../../themes/themes';

export const NavigationStyles = styled.div`
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and ${device.mobileS} {
        width: 288px;
    }
    @media screen and ${device.tablet} {
        width: 640px;
    }
    @media screen and ${device.laptopL} {
        width: 825px;
    }
`;
export const SearchBookInput = styled.input<{ isSearchInputOpen: boolean }>`
    outline: none;
    border-radius: 599px;
    border: none;
    box-shadow: 0 2px 4px ${EColors.GreyShadow1}, 0 3px 4px ${EColors.GreyShadow2}, 0 1px 5px ${EColors.GreyShadow3};
    display: flex;
    align-items: center;
    padding-left: 50px;
    caret-color: ${EColors.Cursor};

    @media screen and ${device.mobileS} {
        display: ${(props) => props.isSearchInputOpen ? 'flex' : 'none'};
        width: 288px;
        height: 32px;
        padding: 0 16px;
        :focus::-webkit-input-placeholder {
            color: ${EColors.Grey};
        }

    ;
        ::placeholder {
            ${labelVariants.small400};
            color: ${EColors.Grey};
        }
    }
    @media screen and ${device.tablet} {
        width: 274px;
        height: 38px;
        padding-left: 40px;
        :focus::-webkit-input-placeholder {
            color: ${EColors.Grey};
        }

    ;
        ::placeholder {
            ${labelVariants.medium14Norm};
            color: ${EColors.Grey};
        }
    }
    @media screen and ${device.laptopL} {
        width: 350px;
        height: 38px;
        padding-left: 40px;
        :focus::-webkit-input-placeholder {
            color: transparent;
        }

    ;
        ::placeholder {
            ${labelVariants.medium14Norm};
            color: ${EColors.Grey};
        }
    }
`;
export const SearchContainer = styled.div`
    @media screen and ${device.mobileS} {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: end;
        :active {
            background: url('../../images/search-book.svg') no-repeat left;
        }

        button {
            position: absolute;
            width: 28px;
            height: 28px;
            cursor: pointer;
            border-radius: 50%;
            background-color: white;
            border: none;
            margin-right: 8px;
        }
    }
    @media screen and ${device.tablet} {
        position: relative;
        display: flex;
        align-items: center;
        svg {
            position: absolute;
            width: 16px;
            height: 16px;
            margin-left: 16px;
            fill: ${EColors.Grey};
        }
        input:focus + svg {
            fill: url(#paint1_linear_20150_3410);
        }
    }
    @media screen and ${device.laptopL} {
        position: relative;
        display: flex;
        align-items: center;
        svg {
            position: absolute;
            width: 16px;
            height: 16px;
            margin-left: 16px;
            fill: ${EColors.Grey};
        }
        input:focus + svg {
            fill: url(#paint1_linear_20150_3410);
        }
    }
`;
export const SortBookInput = styled.div`
    width: 150px;
    border-radius: 599px;
    box-shadow: 0 2px 4px ${EColors.GreyShadow1}, 0 3px 4px ${EColors.GreyShadow2}, 0 1px 5px ${EColors.GreyShadow3};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;

    span {
        color: ${EColors.Grey};
    }
`;
export const SortBookImg = styled.img<{ isDefaultSort: boolean }>`
    height: 16px;
    width: 16px;
    transform: ${(props) => props.isDefaultSort === true ? 'none' : 'scale(1,-1)'};
`;
export const SearchAndSortContainer = styled.div`
    gap: 16px;
    @media screen and ${device.tablet} {
        width: 440px;
        display: flex;
    }
    @media screen and ${device.laptopL} {
        width: 516px;
        display: flex;
    }
`;
export const IconButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and ${device.mobileS} {
        width: 80px;
    }
    @media screen and ${device.tablet} {
        width: 92px;
    }
    @media screen and ${device.laptopL} {
        width: 92px;
    }
`;
export const IconButtonSearchAndSortContainer = styled.div`
    @media screen and ${device.mobileS} {
        display: flex;
        justify-content: space-between;
        width: 80px;
        align-items: center;
    }
`;
export const ButtonCloseInput = styled.button<{ isSearchInputOpen: boolean }>`
    display: ${(props) => props.isSearchInputOpen ? 'flex' : 'none'};
    position: relative;
    align-items: center;
    justify-content: center;
    img {
        position: absolute;
    }
`;
export const IconDiv = styled.div<{ isDefaultSort: boolean }>`
    transform: ${(props) => props.isDefaultSort === true ? 'none' : 'scale(1,-1)'};
`;
