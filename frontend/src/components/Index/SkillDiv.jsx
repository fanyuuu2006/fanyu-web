import "@/styles/Index/Skill.css"
import RwdBr from "../common/RwdBr";
import FlexGrowDiv from "../common/FlexGrowDiv";
import Image from "next/image";
import { FaPen } from "react-icons/fa";
import javascript from "@/assets/images/Skills/javascript.svg";
import python from "@/assets/images/Skills/python.svg";

const SkillData = [
  {
    category_name: {
      chinese: "略有造詣",
      english: "Somewhat Skilled",
    },
    skills: [
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "Python",
        icon: python,
      },
    ],
  },
];

export default function SkillDiv() {
  return (
    <FlexGrowDiv
      TitleComponents={
        <>
          <FaPen /> 技能 <RwdBr />
          Skill
        </>
      }
    >
      {SkillData.map((category) => {
        return (
          <div key={category.category_name.english} className="Skill-Div">
            <p className="Skill-Title">
              {category.category_name.chinese} <RwdBr />
              {category.category_name.english}
            </p>
            {category.skills.map((skill) => {
              return (
                <Image
                  className="Skill-Image"
                  src={skill.icon}
                  key={skill.name}
                  alt={skill.name}
                  aria-label={skill.name}
                />
              );
            })}
          </div>
        );
      })}
    </FlexGrowDiv>
  );
}
