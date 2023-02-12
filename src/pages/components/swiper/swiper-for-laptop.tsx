import React, {useState} from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';

import {FreeMode, Scrollbar, Thumbs} from 'swiper';
import SwiperClass from 'swiper/types/swiper-class';
import {
    MySwiper,
    MySwiperTwo,
    SwiperSlideOne,
    SwiperSlideTwo
} from './styles';
import {TBooksByIdType} from '../../../services/book-service-types';
import {EEndPoints} from '../../../config/endpoints';

export type TProps = {
    book: TBooksByIdType
}

export const SwiperLaptop: React.FC<TProps> = ({book}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

    return (
        <>
            <MySwiperTwo
                grabCursor={true}
                watchSlidesProgress={true}
                spaceBetween={0}
                loop={true}
                // roundLengths={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Thumbs]}
                data-test-id="slide-big"
            >
                {book.images?.map((photo) =>
                    <SwiperSlideTwo key={photo.url}> <img src={`${EEndPoints.baseUrl}${photo.url}`} alt=""/></SwiperSlideTwo>)
                }
            </MySwiperTwo>
            <MySwiper
                book={book}
                onSwiper={setThumbsSwiper}
                // initialSlide={2}
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={5}
                freeMode={true}
                // centeredSlides={true}
                roundLengths={true}
                loop={true}
                modules={[FreeMode, Thumbs, Scrollbar]}
                scrollbar={{
                    hide: true,
                    draggable: true,
                }}
            >
                {
                    book.images?.map((photo) =>
                        <SwiperSlideOne book={book} key={photo.url} data-test-id="slide-mini"> <img
                            src={`${EEndPoints.baseUrl}${photo.url}`} alt=""/></SwiperSlideOne>
                    )
                }
            </MySwiper>
        </>
    );
};
