import HeaderContainer from "@/containers/HeaderContainer/HeaderContainer";
import "./hero.scss";
import config from "@/utils/config";
// import Spline from "@splinetool/react-spline";
import { MdWavingHand } from "react-icons/md";
import { IoCodeDownloadSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import * as React from "react";
import { titles } from "@/containers/HeroContainer/Hero.utils";
import {
  fadeIn,
  fadeOut,
  staggerContainer,
  textContainer,
} from "./Hero.motion";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
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
        style={{ width: "100vw" }}
      />

      <motion.div
        variants={staggerContainer(0.5, 0.2)}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        className="Hero_heading"
      >
        <motion.h1 variants={textContainer}>
          {titles.map((item, index) => (
            <div key={index}>
              <motion.span
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // whileHover={{ opacity: 0 }}
                // transition={{

                //   delay: index * 0.02,
                // }}
                variants={fadeIn}
                // initial="hidden"
                // animate="show"
                key={index}
              >
                {item.letter}
              </motion.span>
              <motion.p
                // initial={{ opacity: 1 }}
                // whileInView={{ opacity: 0 }}
                // whileHover={{ opacity: 1 }}
                // transition={{
                //   delay: index * 0.02,
                // }}
                variants={fadeOut}
                // whileHover="hidden"
                className="icon"
              >
                {item.icon}
              </motion.p>
            </div>
          ))}
        </motion.h1>
        <h2>DEVELOPPER FRONT-END</h2>
      </motion.div>
      <div className="Hero_content">
        {/* <Spline
          className="hidden sm:block"
          scene="https://prod.spline.design/KqTWkPpyk6qy86-O/scene.splinecode"
          style={{ width: "50vw", height: "70vh" }}
        /> */}
        <div className="avatar-container">
          <img
            src={`${config.image_base}/assets/images/portfolio.svg`}
            className="w-[20vw] object-cover"
          />
          <img
            src={`${config.image_base}/assets/images/Thino.png`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] object-cover"
          />
        </div>
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
