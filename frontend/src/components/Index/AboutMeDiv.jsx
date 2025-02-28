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
      我是范余振富，一位對程式設計與軟體開發充滿熱情的大學生。
      <br />
      雖然我目前仍是初學者，但我始終對這個領域保持高度的興趣，並且持續努力擴展自己的相關知識。
      <br />
      而且我喜歡探索新技術，也樂於與他人分享所學，希望藉由交流與合作，提升自己的能力並幫助別人一起成長。
    </FlexGrowDiv>
  );
}
