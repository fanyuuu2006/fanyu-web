import "@/styles/Index/Project.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import OutsideLink from "../common/OutsideLink";
import Carousel from "../common/Carousel";
import FlexGrowDiv from "../common/FlexGrowDiv";
import { FaFileAlt, FaArrowRight } from "react-icons/fa";
import labagweb from "@/assets/images/labagweb.jpg";
import labagexe from "@/assets/images/labagexe.jpg";
import simplifygui from "@/assets/images/simplifygui.jpg";
import ToolsForMeta from "@/assets/images/ToolsForMeta.webp";
import CampPhoto from "@/assets/images/CampPhoto.jpg";

const ProjectData = [
  {
    name: "啦八機 (Next.js 網頁)",
    url: "https://labag-nextjs.vercel.app/",
    img: labagweb,
  },
  {
    name: "Meta 資訊處理工具",
    url: "https://meta-infomation-tools.vercel.app/",
    img: ToolsForMeta,
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
  {
    name: "飯魚的個人網站",
    url: "https://fanyu-web.vercel.app/",
    img: CampPhoto,
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
          <FaFileAlt /> 專案 Project
        </>
      }
    >
      <Carousel slidesPerView={SlidesPerView} autoPlay={AutoPlay}>
        {ProjectData.map((project, index) => {
          return (
            <div className="Project-Div" key={`${index}_${project.name}`}>
              <Image
                loading="lazy"
                className="Project-Image"
                src={project.img}
                alt={project.name}
              />
              <div className="Project-Text">
                {project.name}
                <OutsideLink href={project.url}>
                  查看 <FaArrowRight />
                </OutsideLink>
              </div>
            </div>
          );
        })}
      </Carousel>
    </FlexGrowDiv>
  );
}
