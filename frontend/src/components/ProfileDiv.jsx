import "@/styles/Profile.css";
import Image from "next/image";
import CampPhoto from "@/assets/images/CampPhoto.jpg";
import Profile from "@/json/Profile.json";
import { GiPositionMarker } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";

function HeadPhoto() {
  return (
    <>
      <Image
        priority
        src={CampPhoto}
        alt="頭像"
        title="帥吧~"
        style={{
          border: "5px solid #888888",
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
      className={isValue ? "ProfileDiv-TableData-Value" : "ProfileDiv-TableData"}
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
            <FaBirthdayCake /> 生日 Birthday:
          </TableData>
          <TableData isValue={true}>{Profile.Birthday}</TableData>
        </tr>
        <tr>
          <TableData isValue={false}>
            <GiPositionMarker /> 來自 From:
          </TableData>
          <TableData isValue={true}>
            <a
              href="https://zh.wikipedia.org/wiki/%E9%97%9C%E8%A5%BF%E9%8E%AE_(%E5%8F%B0%E7%81%A3)"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Profile.From.Chinese}
              <br />
              {Profile.From.English}
            </a>
          </TableData>
        </tr>
        <tr>
          <TableData isValue={false}>
            <GiPositionMarker /> 現居 Location:
          </TableData>
          <TableData isValue={true}>
            <a
              href="https://zh.wikipedia.org/zh-tw/%E5%A4%A7%E5%AE%89%E5%8D%80_(%E8%87%BA%E5%8C%97%E5%B8%82)"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Profile.Location.Chinese}
              <br />
              {Profile.Location.English}
            </a>
          </TableData>
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
          <TableData isValue={false}>
            <IoMailSharp /> 電子郵件 Email:
          </TableData>
          <TableData isValue={true}>
            <a
              href="mailto:bingxiao526@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Profile.Email.Gmail}
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
