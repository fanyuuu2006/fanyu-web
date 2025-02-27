import "@/styles/Profile.css"
import Image from "next/image";
import CampPhoto from "@/assets/images/CampPhoto.jpg";
import Profile from "@/json/Profile.json";
import { GiPositionMarker } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

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
function TableData({ isValue, children, ...props }) {
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
      {...props}
    >
      {children}
    </td>
  );
}

function FileTable() {
  return (
    <table style={{ marginTop: "5px", borderCollapse: "collapse" }}>
      <tbody>
        <tr>
          <TableData isValue={false}>
            <GiPositionMarker /> 國籍 Nationality:
          </TableData>
          <TableData isValue={true}>
            <a
              href="https://maps.app.goo.gl/jSimDBag6FpT1PqG9"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Profile.Nationality.Chinese} {Profile.Nationality.English}
            </a>
          </TableData>
        </tr>
        <tr>
          <TableData isValue={false}>
            <FaBirthdayCake /> 生日 Birthday:
          </TableData>
          <TableData isValue={true}>{Profile.Birthday}</TableData>
        </tr>
        <tr>
          <TableData isValue={false}>
            <IoSchoolSharp /> 學歷 Education:
          </TableData>
          <TableData isValue={true}>
            <a
              href="https://www.ntust.edu.tw/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Profile.Education.School.Chinese}{" "}
              {Profile.Education.Department.Chinese}
              <br />
              {Profile.Education.School.English} <br />
              {Profile.Education.Department.English}
            </a>
          </TableData>
        </tr>
      </tbody>
    </table>
  );
}

export default function ProfileDiv() {
  return (
    <div className="ProfileDiv">
      <HeadPhoto />
      <Name />
      <FileTable />
    </div>
  );
}
