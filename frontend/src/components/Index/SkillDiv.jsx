import "@/styles/Index/Skill.css";
import RwdBr from "../common/RwdBr";
import FlexGrowDiv from "../common/FlexGrowDiv";
import Image from "next/image";
import { FaPen } from "react-icons/fa";
import javascript from "@/assets/images/Skills/javascript.svg";
import typescript from "@/assets/images/Skills/typescript.svg";
import python from "@/assets/images/Skills/python.svg";
import java from "@/assets/images/Skills/java.svg";
import go from "@/assets/images/Skills/go.svg";
import c from "@/assets/images/Skills/c.svg";
import cpp from "@/assets/images/Skills/cpp.svg";
import css from "@/assets/images/Skills/css.svg";
import html from "@/assets/images/Skills/html.svg";
import nodejs from "@/assets/images/Skills/nodejs.png";
import react from "@/assets/images/Skills/react.png";
import nextjs from "@/assets/images/Skills/nextjs.svg";

const SkillData = [
  {
    category_name: {
      chinese: "常用",
      english: "Use Often",
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
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "Node.js",
        icon: nodejs,
      },
      {
        name: "React",
        icon: react,
      },
      {
        name: "Next.js",
        icon: nextjs,
      },
    ],
  },
  {
    category_name: {
      chinese: "初學",
      english: "Beginner",
    },
    skills: [
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "Java",
        icon: java,
      },
      {
        name: "C",
        icon: c,
      },

      {
        name: "C++",
        icon: cpp,
      },
      {
        name: "Go",
        icon: go,
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
              {category.category_name.chinese} {category.category_name.english}
            </p>
            {category.skills.map((skill) => {
              return (
                <Image
                  className="Skill-Image"
                  src={skill.icon}
                  key={skill.name}
                  alt={skill.name}
                  title={skill.name}
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
