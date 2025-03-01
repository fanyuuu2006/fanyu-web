import "@/styles/Index/AboutMe.css";
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
      <p>
        我是范余振富，一位對<span>程式設計</span>與<span>軟體開發</span>
        充滿熱情的大學生。
      </p>
      <p>
        雖然我目前仍是初學者，但我始終對這個領域保持高度的興趣，並且
        <span>持續擴展自己的相關知識</span>。
      </p>
      <p>
        而且我喜歡<span>探索新技術</span>
        ，也樂於與他人分享所學，希望藉由交流與合作，提升自己的能力並幫助別人一起成長。
      </p>
    </FlexGrowDiv>
  );
}
