import React from "react";
import Slide from "../../components/slide";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles.scss";

// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Pagination,
    Mousewheel,
    Autoplay
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

export default function Slides(props) {
    const { data } = props;
    return (
        <div className="ctn-slides">
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                className="mySwiper"
            >
                <SwiperSlide><Slide /></SwiperSlide>
                <SwiperSlide><Slide /></SwiperSlide>
                <SwiperSlide><Slide /></SwiperSlide>
                <SwiperSlide><Slide /></SwiperSlide>
                <SwiperSlide><Slide /></SwiperSlide>
            </Swiper>
        </div>
    );
}
