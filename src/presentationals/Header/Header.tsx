import "./header.scss";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Header = () => {
  return (
    <div className="Header">
      <ul className="Header_link">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Footer">Contact</a>
        </li>
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
