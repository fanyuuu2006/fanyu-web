import "@/styles/Profile.css";
import Image from "next/image";
import OutsideLink from "../common/OutsideLink";
import CampPhoto from "@/assets/images/CampPhoto.jpg";
import Profile from "@/json/Profile.json";
import { GiPositionMarker } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";

const ProfileData = [
  {
    icon: <FaBirthdayCake />,
    label: "生日 Birthday:",
    value: Profile.Birthday,
  },
  {
    icon: <GiPositionMarker />,
    label: "來自 From:",
    value: (
      <OutsideLink
        href="https://zh.wikipedia.org/wiki/%E9%97%9C%E8%A5%BF%E9%8E%AE_(%E5%8F%B0%E7%81%A3)"
      >
        {Profile.From.Chinese}
        <br />
        {Profile.From.English}
      </OutsideLink>
    ),
  },
  {
    icon: <GiPositionMarker />,
    label: "現居 Location:",
    value: (
      <OutsideLink
        href="https://zh.wikipedia.org/zh-tw/%E5%A4%A7%E5%AE%89%E5%8D%80_(%E8%87%BA%E5%8C%97%E5%B8%82)"
      >
        {Profile.Location.Chinese}
        <br />
        {Profile.Location.English}
      </OutsideLink>
    ),
  },
  {
    icon: <IoSchoolSharp />,
    label: "學歷 Education:",
    value: (
      <OutsideLink
      >
        {Profile.Education.School.Chinese}{" "}
        {Profile.Education.Department.Chinese}
        <br />
        {Profile.Education.School.English}
        <br />
        {Profile.Education.Department.English}
      </OutsideLink>
    ),
  },
  {
    icon: <IoMailSharp />,
    label: "電子郵件 Email:",
    value: (
      <OutsideLink
        href={`mailto:${Profile.Email.Gmail}`}
      >
        {Profile.Email.Gmail}
      </OutsideLink>
    ),
  },
];

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
function TableData({ className, children, ...props }) {
  return (
    <td className={className} {...props}>
      {children}
    </td>
  );
}

function FileTable() {
  return (
    <table style={{ marginTop: "5px", borderCollapse: "collapse" }}>
      <tbody>
        {ProfileData.map((value, index) => {
          return (
            <tr key={index}>
              <TableData className={"ProfileDiv-TableData-Key"}>
                {value.icon} {value.label}
              </TableData>
              <TableData className={"ProfileDiv-TableData-Value"}>
                {value.value}
              </TableData>
            </tr>
          );
        })}
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
