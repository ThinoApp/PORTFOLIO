import config from "@/utils/config";
import "./Footer.scss";
import { FiFacebook, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Copyright from "../Copyright/Copyright";
import { Link } from "react-router-dom";

interface FooterProps {
  handleEmailBodyChange: (value: string) => void;
  handleSendMail: () => void;
  contactMeFromWhatsapp: () => void;
}

const Footer = ({
  handleEmailBodyChange,
  handleSendMail,
  contactMeFromWhatsapp,
}: FooterProps) => {
  return (
    <div className="Footer" id="Footer">
      <img
        src={`${config.image_base}/assets/images/line.svg`}
        alt="line"
        className="hero-shape-1"
      />
      <div className="Footer-content">
        <div className="Footer-main">
          <h2>Thino Rakotomalala</h2>
          <h3>Software Developer</h3>
          <div className="footer-avatar-container">
            <img
              src={`${config.image_base}/assets/images/portfolio.svg`}
              className="w-[20vw] object-cover"
            />
            <img
              src={`${config.image_base}/assets/images/Thino.png`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] object-cover"
            />
          </div>
          <div className="icon-container">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/thino-rakotomalala-94540b244/"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:rakotomalalathino@gmail.com?subject=Need your service">
              <FiMail />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008259434338">
              <FiFacebook />
            </a>
            <a href="" onClick={(e) => e.preventDefault()}>
              <FaWhatsapp onClick={contactMeFromWhatsapp} />
            </a>
          </div>
        </div>
        <ul>
          <li>
            <strong>Link</strong>
          </li>
          <li>
            <a href="#Skills">Web projects</a>
          </li>
          <li>
            <Link to="/mobile">Mobile projects</Link>
          </li>
          <li>
            <Link to="/ux">ui/ux design projects</Link>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Location</strong>
          </li>
          <li>
            <FiMapPin />
            Madagascar
          </li>
          <li>
            <FiMail />
            rakotomalalathino@gmail.com
          </li>
          <li>
            <label htmlFor="">
              <strong>Inbox me</strong>
            </label>
            <textarea
              onChange={(e) => handleEmailBodyChange(e.target.value)}
              placeholder="Write Message"
              name=""
              id=""
            />
            <button onClick={handleSendMail}>Send</button>
          </li>
        </ul>
      </div>
      <Copyright />
    </div>
  );
};
export default Footer;
