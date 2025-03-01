import "@/styles/Index/Project.css";
import Image from "next/image";
import OutsideLink from "../common/OutsideLink";
import Carousel from "../common/Carousel";
import labagweb from "@/assets/images/labagweb.jpg";
import FlexGrowDiv from "../common/FlexGrowDiv";

const ProjectData = [
  {
    name: "啦八機 (網頁版)",
    url: "https://labag-nextjs.vercel.app/",
    img: labagweb,
  },
];

export default function ProjectCarouselDiv() {
  return (
    <FlexGrowDiv className="ProjectCarouselDiv">
      <Carousel>
        {ProjectData.map((project, index) => {
          return (
            <OutsideLink
              key={`${index}_${project.name}`}
              className="Project-Div"
              href={project.url}
            >
              <Image
                priority
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
