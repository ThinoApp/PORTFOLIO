import config from "@/utils/config";
import "./Footer.scss";
import {
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTwitter,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Copyright from "../Copyright/Copyright";
const Footer = () => {
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
            <FiLinkedin />
            <FiMail />
            <FiFacebook />
            <FiTwitter />
            <FaWhatsapp />
          </div>
        </div>
        <ul>
          <li>
            <strong>Link</strong>
          </li>
          <li>Web projects</li>
          <li>Mobile projects</li>
          <li>ui/ux design projects</li>
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
            <label htmlFor="">Inbox me</label>
            <input type="text" placeholder="Write Message" name="" id="" />
            <button>Send</button>
          </li>
        </ul>
      </div>
      <Copyright />
    </div>
  );
};
export default Footer;
