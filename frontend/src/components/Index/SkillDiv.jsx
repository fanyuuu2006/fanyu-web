import RwdBr from "../common/RwdBr";
import FlexGrowDiv from "../common/FlexGrowDiv";
import { FaPen } from "react-icons/fa";

export default function SkillDiv() {
  return (
    <FlexGrowDiv
      TitleComponents={
        <>
          <FaPen /> 技能 <RwdBr />
          Skill
        </>
      }
    ></FlexGrowDiv>
  );
}
