import "@/styles/Footer.css";
import { FaGithub } from "react-icons/fa";
import OutsideLink from "./OutsideLink";
export default function Footer() {
  return (
    <footer>
      <p className="Footer-Text">
        © 2025, 飯魚 版權所有.
        <br />© 2025, Fan-Yu, All rights reserved.
        <br />
      </p>
      <OutsideLink href="https://github.com/fanyuuu2006/fanyu-web">
        <FaGithub title="GitHub Repository" size={30} />
      </OutsideLink>
    </footer>
  );
}
