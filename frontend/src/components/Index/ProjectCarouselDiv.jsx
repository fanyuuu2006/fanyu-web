import "@/styles/Index/Project.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import RwdBr from "../common/RwdBr";
import OutsideLink from "../common/OutsideLink";
import Carousel from "../common/Carousel";
import FlexGrowDiv from "../common/FlexGrowDiv";
import { FaFileAlt } from "react-icons/fa";
import labagweb from "@/assets/images/labagweb.jpg";
import labagexe from "@/assets/images/labagexe.jpg";
import simplifygui from "@/assets/images/simplifygui.jpg";

const ProjectData = [
  {
    name: "啦八機 (Next.js 網頁)",
    url: "https://labag-nextjs.vercel.app/",
    img: labagweb,
  },
  {
    name: "Python 的簡易 GUI Module",
    url: "https://github.com/fanyuuu2006/GUI-simplify-Tkinter-Pygame.git",
    img: simplifygui,
  },
  {
    name: "啦八機 (Python)",
    url: "https://github.com/fanyuuu2006/LaBaG-PythonProject.git",
    img: labagexe,
  },
];

export default function ProjectCarouselDiv() {
  // 使用 state 來處理 slidesPerView
  const [SlidesPerView, setSlidesPerView] = useState(1);
  const [AutoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    const updateSlidesPerView = () => {
      setSlidesPerView(
        window.innerWidth > 768
          ? ProjectData.length > 3
            ? 3
            : ProjectData.length
          : 1
      );
      setAutoPlay(
        window.innerWidth > 768
          ? ProjectData.length > 3
          : ProjectData.length > 1
      );
    };

    // 在組件掛載後更新 slidesPerView
    updateSlidesPerView();

    // 監聽窗口尺寸變化
    window.addEventListener("resize", updateSlidesPerView);

    // 清除事件監聽器
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <FlexGrowDiv
      DivClassName="ProjectCarouselDiv"
      TitleClassName="ProjectCarousel-Title"
      ContentClassName="ProjectCarousel-Content"
      TitleComponents={
        <>
          <FaFileAlt /> 專案 <RwdBr />
          Project
        </>
      }
    >
      <Carousel slidesPerView={SlidesPerView} autoPlay={AutoPlay}>
        {ProjectData.map((project, index) => {
          return (
            <div className="Project-Div">
              <Image
                loading="lazy"
                className="Project-Image"
                src={project.img}
                alt={project.name}
                title={project.name}
              />
              <div className="Project-Text">
                {project.name}
                <OutsideLink
                  key={`${index}_${project.name}`}
                  href={project.url}
                >
                  查看
                </OutsideLink>
              </div>
            </div>
          );
        })}
      </Carousel>
    </FlexGrowDiv>
  );
}
