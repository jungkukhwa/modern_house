import React, { useRef, useState } from "react";
import { startTransition } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "../Swiper/styles.scss";

const MainSwiper = (props) => {
  return (
    <div className="Swiper_container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {props.data.map((item) => (
          <SwiperSlide key={item.id} className="slide">
            <Link to={item.link}>
              <div className={`slide_box bg${item.id}`}></div>
              {/* <img src={item.image} alt={item.title} /> */}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSwiper;
