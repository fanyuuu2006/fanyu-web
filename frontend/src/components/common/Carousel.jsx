import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Carousel({
  children,
  className = "w-full max-w-lg",
  delay = 5000,
  slidesPerView = 1, // 預設顯示 1 張
  spaceBetween = 10, // 預設間距 10px
}) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={[Navigation, Pagination, Autoplay]} // 左右按鈕 小圓點 自動播放
      loop={React.Children.count(children) > 2}
      autoplay={{ delay }}
      pagination={{ clickable: true }}
      navigation
      className={className}
    >
      {/* React.Children.map 確保所有子元素都包在 SwiperSlide 中 */}
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
