import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const StudentsActivities = () => {
  return (
    <div className="w-[260px] mx-auto mt-8 ps-5">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex items-center justify-center group">
            <img
              src="https://i.pinimg.com/736x/9d/3e/07/9d3e076621d60992e549f82722ea0771.jpg"
              alt=""
              className="w-full h-[430px]"
            />
            <a
              href=""
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center group">
            <img
              src="https://i.pinimg.com/736x/9d/3e/07/9d3e076621d60992e549f82722ea0771.jpg"
              alt=""
              className="w-full h-[430px]"
            />
            <a
              href=""
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center group">
            <img
              src="https://i.pinimg.com/736x/9d/3e/07/9d3e076621d60992e549f82722ea0771.jpg"
              alt=""
              className="w-full h-[430px]"
            />
            <a
              href=""
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center group">
            <img
              src="https://i.pinimg.com/736x/9d/3e/07/9d3e076621d60992e549f82722ea0771.jpg"
              alt=""
              className="w-full h-[430px]"
            />
            <a
              href=""
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center group">
            <img
              src="https://i.pinimg.com/736x/9d/3e/07/9d3e076621d60992e549f82722ea0771.jpg"
              alt=""
              className="w-full h-[430px]"
            />
            <a
              href=""
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex items-center justify-center group">
            <img
              src="https://i.pinimg.com/736x/9d/3e/07/9d3e076621d60992e549f82722ea0771.jpg"
              alt=""
              className="w-full h-[430px]"
            />
            <a
              href=""
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="relative flex items-center justify-center group">
            <img
              src="https://i.pinimg.com/736x/9d/3e/07/9d3e076621d60992e549f82722ea0771.jpg"
              alt=""
              className="w-full h-[430px]"
            />
            <a
              href=""
              className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default StudentsActivities;
