import React from "react";
import Slide from "../../components/slide";
import "./styles.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
    EffectCoverflow,
    Navigation,
    Pagination,
    Mousewheel,
    Autoplay
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Mousewheel, Autoplay]);

export default function Slides(props) {
    const { data } = props;
    return (
        <div className="ctn-slides">
            <Swiper
                style={{
                    "--swiper-theme-color": "white"
                }}
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                loop
                navigation
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                className="mySwiper"
            >  
                {data?.results?.map(result => (
                    <SwiperSlide key={result?.link.url}>
                        <Slide result={result} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
