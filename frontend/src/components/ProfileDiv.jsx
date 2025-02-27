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

// 通用的 TableData 組件
function TableData({ isValue, Content, Link }) {
  return (
    <>
      {isValue ? (
        <>
          <td style={{fontSize: "16px", color: "#0080FF"}}>
            {Link ? (
              <a href={Link} target="_blank" rel="noopener noreferrer">
                {Content}
              </a>
            ) : (
              Content
            )}
          </td>
        </>
      ) : (
        <>
          <td style={{fontSize: "14px" }}>{Content}</td>
        </>
      )}
    </>
  );
}

export default function ProfileDiv() {
  return (
    <div className="ProfileDiv">
      <HeadPhoto />
      <Name />
      <table style={{ marginTop: "5px", borderCollapse: "collapse"}}>
        <tbody>
          <tr>
            <TableData isValue={false} Content={"生日:"} />
            <TableData isValue={true} Content={Profile.Birthday} />
          </tr>
          <tr>
            <TableData isValue={false} Content={"學歷:"} />
            <TableData
              isValue={true}
              Content={`${Profile.Education.School.Chinese} ${Profile.Education.School.English}`}
              Link={"https://www.ntust.edu.tw/"}
            />
            <TableData
            isValue={true}
            Content={`${Profile.Education.Department.Chinese} ${Profile.Education.Department.English}`}
            Link={"https://www.cs.ntust.edu.tw/"}
          />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
