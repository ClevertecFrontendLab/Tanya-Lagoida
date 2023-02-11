import React, {useState} from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';

import {FreeMode, Scrollbar, Thumbs} from 'swiper';
import SwiperClass from 'swiper/types/swiper-class';
import {TBooks} from '../../constants/constants-book';
import {
    MySwiper,
    MySwiperTwo,
    SwiperSlideOne,
    SwiperSlideTwo
} from './styles';

export type TProps = {
    book?: TBooks
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
                {book?.cover?.map((photo) =>
                    <SwiperSlideTwo key={photo.id}> <img src={photo.img} alt=""/></SwiperSlideTwo>)
                }
            </MySwiperTwo>
            <MySwiper book={book}
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
                    book?.cover?.map((photo) =>
                        <SwiperSlideOne book={book} key={photo.id} data-test-id="slide-mini"> <img
                            src={photo.img} alt=""/></SwiperSlideOne>
                    )
                }
            </MySwiper>
        </>
    );
};
