import Image from "next/image";
import CampPhoto from "@/assets/images/CampPhoto.jpg";
import Profile from "@/json/Profile.json";

function HeadPhoto() {
  return (
    <>
      <Image
        priority
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
    <td
      style={{
        display: "block",
        color: isValue ? "#0080FF" : "#000000",
        fontSize: isValue ? "16px" : "14px",
        fontWeight: "bold",
        marginTop: isValue ? "0px" : "5px",
        whiteSpace: "nowrap",
      }}
    >
      {isValue ? (
        Link ? (
          <a href={Link} target="_blank" rel="noopener noreferrer">
            {Content}
          </a>
        ) : (
          Content
        )
      ) : (
        Content
      )}
    </td>
  );
}

function FileTable() {
  return (
    <>
      <table style={{ marginTop: "5px", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <TableData isValue={false} Content={"國籍:"} />
            <TableData
              isValue={true}
              Content={`${Profile.Nationality.Chinese} ${Profile.Nationality.English}`}
            />
          </tr>
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
    </>
  );
}

export default function ProfileDiv() {
  return (
    <div className="ProfileDiv">
      <HeadPhoto />
      <Name />
      <FileTable/>
    </div>
  );
}
