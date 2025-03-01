import "@/styles/Index/Project.css";
import Image from "next/image";
import RwdBr from "../common/RwdBr";
import OutsideLink from "../common/OutsideLink";
import Carousel from "../common/Carousel";
import labagweb from "@/assets/images/labagweb.jpg";
import FlexGrowDiv from "../common/FlexGrowDiv";
import { FaFileAlt } from "react-icons/fa";

const ProjectData = [
  {
    name: "啦八機 (網頁版)",
    url: "https://labag-nextjs.vercel.app/",
    img: labagweb,
  },
];

export default function ProjectCarouselDiv() {
  const slidesPerView =
    window.innerWidth > 768
      ? ProjectData.length > 3
        ? 3
        : ProjectData.length
      : 1;

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
      <Carousel slidesPerView={slidesPerView} autoPlay={ProjectData.length > 1}>
        {ProjectData.map((project, index) => {
          return (
            <OutsideLink
              key={`${index}_${project.name}`}
              className="Project-Div"
              href={project.url}
            >
              <Image
                loading="lazy"
                className="Project-Image"
                src={project.img}
                alt={project.name}
                title={project.name}
              />
              <div className="Project-Text">{project.name}</div>
            </OutsideLink>
          );
        })}
      </Carousel>
    </FlexGrowDiv>
  );
}
