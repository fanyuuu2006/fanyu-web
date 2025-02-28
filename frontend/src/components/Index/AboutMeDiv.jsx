import { FaRegStar } from "react-icons/fa";
import FlexGrowDiv from "../common/FlexGrowDiv";
import RwdBr from "../common/RwdBr";

export default function AboutMeDiv() {
  return (
    <FlexGrowDiv
      TitleComponents={
        <>
          <FaRegStar /> 關於我 <RwdBr />
          About Me
        </>
      }
    >
      我是范余振富，一位對程式設計與軟體開發有熱誠的大學生。目前還只是初學者，正持續擴展自己的相關知識！
    </FlexGrowDiv>
  );
}
