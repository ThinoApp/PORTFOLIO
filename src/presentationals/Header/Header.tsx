import "./header.scss";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

interface HeaderProps {
  handleSendMail: () => void;
}
const Header = ({ handleSendMail }: HeaderProps) => {
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
          <a
            target="_blank"
            href="https://www.linkedin.com/in/thino-rakotomalala-94540b244/"
          >
            <FiLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/ThinoApp">
            <FiGithub className="icon" />
          </a>
        </li>
        <li onClick={handleSendMail}>
          <FiMail className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
