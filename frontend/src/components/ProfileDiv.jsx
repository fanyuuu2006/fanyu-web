import Image from "next/image";
import CampPhoto from "@/assets/images/CampPhoto.jpg";
import Profile from "@/json/Profile.json";
import { getFallbackRouteParams } from "next/dist/server/request/fallback-params";

function HeadPhoto() {
  return (
    <>
      <Image
        src={CampPhoto.src}
        width={300}
        height={300}
        alt="頭像"
        style={{
          border: "5px solid #2c1e52",
          borderRadius: "100%",
        }}
      />
    </>
  );
}

function Name() {
  return (
    <>
      <p style={{ fontSize: "30px", fontWeight: "bold", margin: "5px" }}>
        {`${Profile.Name.Chinese} (${Profile.Nickname.Chinese})`}
      </p>
      <p style={{ fontSize: "18px", fontWeight: "bold", margin: "0px" }}>
        {`${Profile.Name.English} (${Profile.Nickname.English})`}
      </p>
    </>
  );
}

function Birthday() {
  return (
    <>
      <p style={{ fontSize: "18px", margin: "5px" }}>
        {`生日: ${Profile.Birthday}`}
      </p>
    </>
  );
}

export default function ProfileDiv() {
  return (
    <div className="ProfileDiv">
      <HeadPhoto />
      <Name />
      <Birthday />
    </div>
  );
}
