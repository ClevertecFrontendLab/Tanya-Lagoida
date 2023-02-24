import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper';
import {
    MySwiperTwo,
    SwiperSlideTwo,
} from './styles';
import {TBooksByIdType} from '../../../services/book-service-types';
import {EEndPoints} from '../../../config/endpoints';


export type TProps = {
    book?: TBooksByIdType
}

export const SwiperTabletAndMobile: React.FC<TProps> = ({book}) => (

    <MySwiperTwo
        spaceBetween={0}
        grabCursor={true}
        loop={true}
        pagination={{
            clickable: true,
            dynamicMainBullets: 8,
            dynamicBullets: true,

        }}
        modules={[Pagination]}
        data-test-id="slide-big"
    >
        {book?.images?.map((photo) =>
            <SwiperSlideTwo key={photo.url}> <img src={`${EEndPoints.baseUrl}${photo.url}`} alt=""/></SwiperSlideTwo>)
        }
    </MySwiperTwo>
);
