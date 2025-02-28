import "@/styles/Index/ContactLink.css";
import Link from "next/link";
import Contact from "@/json/Contact.json";
import FlexGrowDiv from "../common/FlexGrowDiv";
import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import RwdBr from "../common/RwdBr";

const ContactData = [
  {
    title: "Instagram",
    icon: <FaInstagram />,
    ...Contact.Instagram,
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    ...Contact.GitHub,
  },
  {
    title: "YouTube",
    icon: <FaYoutube />,
    ...Contact.YouTube,
  },
  {
    title: "Threads",
    icon: <BsThreads />,
    ...Contact.Threads,
  },
  {
    title: "Facebook",
    icon: <FaFacebook />,
    ...Contact.Facebook,
  },
  {
    title: "TikTok",
    icon: <FaTiktok />,
    ...Contact.TikTok,
  },
];

function ContactLink({ title, href, children, ...props }) {
  return (
    <Link
      className="ContactLink"
      title={title}
      href={href}
      target="_blank"
      {...props}
    >
      {children}
    </Link>
  );
}

export default function ContactDiv() {
  return (
    <FlexGrowDiv
      TitleComponents={
        <>
          社交與聯繫方式 <RwdBr />
          Social and Contrat
        </>
      }
    >
      {ContactData.map((value, index) => {
        return (
          <ContactLink key={index} title={value.title} href={value.url}>
            {value.icon} {value.id}
          </ContactLink>
        );
      })}
    </FlexGrowDiv>
  );
}
