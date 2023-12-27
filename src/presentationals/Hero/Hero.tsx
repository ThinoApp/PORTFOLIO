import HeaderContainer from "@/containers/HeaderContainer/HeaderContainer";
import "./hero.scss";
import config from "@/utils/config";
// import Spline from "@splinetool/react-spline";
import { MdWavingHand } from "react-icons/md";
import { IoCodeDownloadSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import * as React from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  console.log(`/PORTFOLIO/assets/images/line.svg`);
  return (
    <div className="Hero">
      <img
        src={`${config.image_base}/assets/images/line.svg`}
        alt="line"
        className="hero-shape-1"
      />
      <HeaderContainer />

      <Spline
        className="sm:hidden"
        scene="https://prod.spline.design/g3SdymjwkvqytP8w/scene.splinecode"
        style={{ width: "100vw", height: "90vh" }}
      />

      <div className="Hero_heading">
        <h1>THINO RAKOTOMALALA</h1>
        <h2>DEVELOPPER FRONT-END</h2>
      </div>
      <div className="Hero_content">
        <Spline
          className="hidden sm:block"
          scene="https://prod.spline.design/KqTWkPpyk6qy86-O/scene.splinecode"
          style={{ width: "50vw", height: "70vh" }}
        />
        <div className="Hero_text">
          <h2>
            <span>Welcome to my Portfolio </span>
            <span>
              <motion.img
                initial={{ rotate: "0deg" }}
                whileHover={{ rotate: "360deg" }}
                transition={{ duration: 1 }}
                src={`${config.image_base}/assets/images/smile.svg`}
                alt=""
              />
            </span>
          </h2>
          <p>
            Creator of complete digital solutions, I am a Full Stack Developer
            Passionate about turning ideas into functional applications. My
            mastery of front-end and back-end technologies allows me to build
            Robust and intuitive web platforms that can meet the needs of the
            users' complexities.
          </p>
          <div className="Hero_Cta">
            <button>
              Hire Me
              <MdWavingHand className="icon" />
            </button>
            <button>
              Download CV
              <IoCodeDownloadSharp className="icon" />
            </button>
          </div>
          <div className="Hero_socialIcon">
            <div>
              <FaUserCircle className="socialIcon" />
            </div>
            <div>
              <FaLinkedin className="socialIcon" />
            </div>
            <div>
              <FaGithub className="socialIcon" />
            </div>
            <hr className="hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
