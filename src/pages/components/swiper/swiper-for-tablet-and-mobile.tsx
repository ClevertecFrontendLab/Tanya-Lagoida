import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper';
import {TBooks} from '../../constants/constants-book';
import {
    MySwiperTwo,
    SwiperSlideTwo,
} from './styles';


export type TProps = {
    book?: TBooks
}

export const SwiperTabletAndMobile: React.FC<TProps> = ({book}) => (

    <MySwiperTwo
        spaceBetween={0}
        grabCursor={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        data-test-id="slide-big"
    >
        {book?.cover?.map((photo) =>
            <SwiperSlideTwo key={photo.id}> <img src={photo.img} alt=""/></SwiperSlideTwo>)
        }
    </MySwiperTwo>
);
