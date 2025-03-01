import "@/styles/Carousel.css";
import React, { useState, useEffect } from "react";

export default function Carousel({
  children,
  className = "",
  autoPlay = false,
  intervalSecend = 5,
  slidesPerView = 1,
  ...props
}) {
  const [Index, setIndex] = useState(0);
  const childrenLength = React.Children.count(children);

  // 自動播放
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenLength);
      }, intervalSecend * 1000);
      return () => clearInterval(interval);
    }
  }, [children, autoPlay, childrenLength, intervalSecend]);

  // 處理循環顯示
  const CurrentChilds = React.Children.toArray(children)
    .map((_, idx) => {
      const curr_idx = (Index + idx) % childrenLength;
      return React.Children.toArray(children)[curr_idx];
    })
    .slice(0, slidesPerView);

  return (
    <div key={Index} className={`Carousel-Div ${className}`} {...props}>
      {CurrentChilds}
    </div>
  );
}
