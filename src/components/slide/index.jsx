import React from "react";
import MovieImg from '../movieImg'
import MovieName from '../movieName'
import img from '../../assets/image/wandavission.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./styles.scss";

// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Mousewheel,
    Autoplay
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Autoplay]);

export default function Slide(props) {
    const { data } = props;
    return (
        <>
            <Swiper
                pagination={{
                    clickable: true
                }}
                mousewheel={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="cpn-slide">
                        <MovieImg img={img} alt="img" />
                        <MovieName name="ạdhgạkd" />
                        <p className="cpn-slide__year">2021</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
