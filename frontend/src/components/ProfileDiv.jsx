import Image from "next/image";
import CampPhoto from "@/assets/images/CampPhoto.jpg";
import Profile from "@/json/Profile.json";

function HeadPhoto() {
  return (
    <>
      <Image
        src={CampPhoto.src}
        width={250}
        height={250}
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
      <p style={{ fontSize: "25px", fontWeight: "bold", margin: "5px" }}>
        {`${Profile.Name.Chinese} (${Profile.Nickname.Chinese})`}
      </p>
      <p style={{ fontSize: "16px", fontWeight: "bold", margin: "0px" }}>
        {`${Profile.Name.English} (${Profile.Nickname.English})`}
      </p>
    </>
  );
}

function Birthday() {
  return (
    <>
      <p style={{ fontSize: "14px", margin: "5px" }}>生日:</p>
      <p style={{ fontSize: "18px", margin: "5px" }}>{`${Profile.Birthday}`}</p>
    </>
  );
}

function Education() {
  return (
    <div>
      <p style={{ fontSize: "14px", margin: "5px" }}>學歷:</p>

      <p style={{ fontSize: "18px", margin: "5px" }}>
        <a href="https://www.ntust.edu.tw/" >
          {`${Profile.Education.School.Chinese} ${Profile.Education.School.English}`}
          <br />
        </a>
      {`${Profile.Education.Department.Chinese} ${Profile.Education.Department.English}`}
      </p>
    </div>
  );
}

export default function ProfileDiv() {
  return (
    <div className="ProfileDiv">
      <HeadPhoto />
      <Name />
      <div style={{ marginTop: "10px" }}>
        <Birthday />
        <Education />
      </div>
    </div>
  );
}
