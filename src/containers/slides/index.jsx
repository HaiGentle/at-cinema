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
            {
                /**
                 TODO: Đặt slide mặt định là thằng thứ 2 
                 */
            }
            <Swiper
                style={{
                    "--swiper-theme-color": "white"
                }}
                /**
                 TODO: Xem lại cách đặt tên tối giản đối với một số trường hợp
                */
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
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
