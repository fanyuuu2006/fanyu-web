import Link from "next/link";

function ContactLink({ title, href, icon, childran, ...props }) {
  return (
    <Link className="ContactButton" title={title} href={href} {...props}>
      {icon} {childran}
    </Link>
  );
}

export default function ContactLinkDiv() {
  return <></>;
}