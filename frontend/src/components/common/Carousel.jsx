import "@/styles/Carousel.css";
import React, { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function Carousel({
  children,
  className = "",
  autoPlay = false,
  intervalSecend = 5,
  slidesPerView = 1,
  ...props
}) {
  const [Index, setIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const childrenLength = React.Children.count(children);

  // 自動播放
  useEffect(() => {
    if (autoPlay && childrenLength > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenLength);
      }, intervalSecend * 1000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, childrenLength, intervalSecend]);

  // 處理循環顯示
  const CurrentChilds = Array.from({ length: slidesPerView }, (_, i) => {
    const curr_idx = (Index + i) % childrenLength;
    return childrenArray[curr_idx];
  });

  return (
    <div className={`Carousel-Div ${className}`} {...props}>
      <div className={`Carousel-Slide`}>{CurrentChilds}</div>
      {childrenLength > slidesPerView && (
        <div className="Carousel-Nav">
          <IoIosArrowDropleft
            onClick={() => {
              setIndex((prev) => (prev - 1 + childrenLength) % childrenLength);
            }}
          />
          <IoIosArrowDropright
            onClick={() => {
              setIndex((prev) => (prev + 1) % childrenLength);
            }}
          />
        </div>
      )}
    </div>
  );
}
