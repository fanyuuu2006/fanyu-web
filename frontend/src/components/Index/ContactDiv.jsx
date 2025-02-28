import "@/styles/Index/ContactLink.css";
import Link from "next/link";
import Contact from "@/json/Contact.json";
import { FaGithub, FaInstagram } from "react-icons/fa";

const ContactData = [
  {
    title: "GitHub",
    icon: <FaGithub />,
    ...Contact.GitHub,
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    ...Contact.Instagram,
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
    <div className="ContactDiv">
      <p className="ContactDiv-Title">社交與聯繫方式 Social and Contrat</p>
      <div className="ContactLinkDiv">
        {ContactData.map((value, index) => {
          return (
            <ContactLink key={index} title={value.title} href={value.url}>
              {value.icon} {value.id}
            </ContactLink>
          );
        })}
      </div>
    </div>
  );
}
