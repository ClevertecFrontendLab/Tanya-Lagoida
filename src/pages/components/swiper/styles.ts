import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import {EColors} from '../../themes/themes';
import {TProps} from './swiper-for-laptop';
import {device} from '../../main/styles';

export const MySwiperTwo = styled(Swiper)`
    @media screen and ${device.mobileS} {
        width: 188px;
        min-height: 300px;
        //justify-content: start;
        .swiper-pagination-bullet-active {
            background-color: ${EColors.Inherit};
            width: 9px;
            height: 9px;
        }
    }
    @media screen and ${device.tablet} {
        width: 136px;
        height: 238px;
        border-radius: 3px;
        .swiper-pagination-bullet-active {
            background-color: ${EColors.Inherit};
            width: 9px;
            height: 9px;
        }
    }
    @media screen and ${device.laptopL} {
        height: 593px !important;
        width: 445px !important;
        background-color: ${EColors.LightGrey};
        justify-content: center;
        align-items: center;
    }

    display: flex;
    overflow: hidden;
`;
export const MySwiper = styled(Swiper)<TProps>`
    @media screen and ${device.mobileS} {
        display: none;
    }
    @media screen and ${device.tablet} {
        display: none;
    }
    @media screen and ${device.laptopL} {
        width: 445px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        //align-items: center;
        //justify-content: center;
        padding-top: 17px;
        flex-direction: column;
        height: ${(props) => props.book.images?.length && props.book.images.length > 5 ? '120px'
            : props.book.images?.length && props.book.images.length > 1 && props.book.images.length <=5 ? '103px'
            : '0'};
        .swiper-slide {
            width: 65px !important;
            height: ${(props) => props.book.images?.length && props.book.images.length > 1 ? '86px' : '0'};
            opacity: 0.5;
            border: 1px solid #BFC4C9;
        }
        .swiper-slide-thumb-active {
            opacity: 1;
            border: 1px solid darkorange;
            .swiper-centered {
                place-content: center;
            }
        }
        .swiper-scrollbar{

            background: white;
            height: 6px!important;
            .swiper-scrollbar-drag {
                background: ${EColors.Grey};
                :first-child {
                    display: none;
                }
                width: 190px!important;
            }
        }
        .swiper-wrapper {
            transform: translate3d(0, 0, 0);
        }

    }
`;
export const SwiperSlideTwo = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and ${device.mobileS} {
        img {
            width: 188px;
            height: 260px !important;
            background-color: ${EColors.LightGrey};
            border: 1px solid ${EColors.Grey};
            border-radius: 10px;
        }
    }
    @media screen and ${device.tablet} {
        img {
            width: 136px;
            height: 198px !important;
            border: 1px solid ${EColors.Grey};
            border-radius: 3px;
        }
    }
    @media screen and ${device.laptopL} {
        justify-items: center;
        box-sizing: border-box;

        img {
            height: 593px !important;
            width: 444px;
            background-color: ${EColors.LightGrey};
            border: 1px solid ${EColors.Grey};
            border-radius: 10px;
        }
    }
`;
export const ImgContainerForSwiper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${EColors.LightGrey};
    border: 1px solid ${EColors.Grey};
    @media screen and ${device.mobileS} {
        border-radius: 10px;
        width: 188px;
        height: 260px;
        img {
            align-self: center;
            justify-self: center;
            height: 48px;
            width: 48px;
        }
    }
    @media screen and ${device.tablet} {
        width: 136px;
        height: 198px !important;
        border-radius: 3px;
        img {
            align-self: center;
            justify-self: center;
            height: 32px;
            width: 32px;
        }
    }
    @media screen and ${device.laptopL} {
        height: 593px !important;
        width: 445px !important;
        border-radius: 10px;
        img {
            align-self: center;
            justify-self: center;
            height: 56px;
            width: 56px;
        }
    }
`;
export const SwiperSlideOne = styled(SwiperSlide)<TProps>`
    @media screen and ${device.mobileS} {
        display: none;
    }
    @media screen and ${device.tablet} {
        display: none;
    }
    @media screen and ${device.laptopL} {
        display: ${(props) => props.book.images?.length && props.book.images.length > 1 ? 'flex' : 'none'};
        justify-content: center;
        align-items: center;
        img {
            display: block;
            height: ${(props) => props.book.images?.length && props.book.images.length > 1 ? '100%' : '0'};
            width: ${(props) => props.book.images?.length && props.book.images.length > 1 ? '100%' : '0'};
        }
    }
`;
