import "./header.scss";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Header = () => {
  return (
    <div className="Header">
      <ul className="Header_link">
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ul className="Header_socialNetwork">
        <li>
          <FiLinkedin className="icon" />
        </li>
        <li>
          <FiTwitter className="icon" />
        </li>
        <li>
          <FiMail className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
