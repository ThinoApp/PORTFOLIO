import config from "@/utils/config";
import "./GithubClone.scss";
import { FaGithub } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
const GithubClone = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      setIsOpen(false);
    }
  }, [isInView]);

  return (
    <div className="flex flex-col items-center relative" ref={ref}>
      <AnimatePresence mode="popLayout">
        <div
          className={`GithubClone ${
            isOpen ? "show opacity-100" : "hide opacity-0"
          }`}
        >
          {isOpen === false ? (
            <motion.div
              key="githubIcon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FaGithub
                className="github-icon"
                onClick={() => setIsOpen(true)}
              />
            </motion.div>
          ) : (
            <>
              <img
                src={`${config.image_base}/assets/images/Github/github_mobile_illustration.png`}
                alt="github background"
              />
              <div className="content-container">
                <h2>
                  Dive deep into my
                  <span> GITHUB WELCOME PAGE </span>
                  <span>CLONE</span>
                </h2>
                <FaGithub className="github-icon" />

                <button>
                  <a
                    href="https://ThinoApp.github.io/WEEKLY_DECEMBER_FRONT_5"
                    target="_blank"
                  >
                    LET'S GO
                  </a>
                  <FiChevronRight strokeWidth={6} />
                </button>
                <button>
                  <a
                    href="https://github.com/ThinoApp/WEEKLY_DECEMBER_FRONT_5.git"
                    target="_blank"
                  >
                    GITHUB
                  </a>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.178"
                    height="29.186"
                    viewBox="0 0 20.178 29.186"
                  >
                    <defs>
                      <filter
                        id="Icon_awesome-chevron-right"
                        x="0"
                        y="0"
                        width="20.178"
                        height="29.186"
                        filterUnits="userSpaceOnUse"
                      >
                        <feOffset dx="5" dy="5" />
                        <feGaussianBlur result="blur" />
                        <feFlood />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                      </filter>
                    </defs>
                    <g
                      transform="matrix(1, 0, 0, 1, 0, 0)"
                      filter="url(#Icon_awesome-chevron-right)"
                    >
                      <path
                        id="Icon_awesome-chevron-right-2"
                        data-name="Icon awesome-chevron-right"
                        d="M15.631,15.142,5.312,25.46a1.274,1.274,0,0,1-1.8,0l-1.2-1.2a1.274,1.274,0,0,1,0-1.8l8.178-8.216L2.3,6.024a1.274,1.274,0,0,1,0-1.8l1.2-1.2a1.274,1.274,0,0,1,1.8,0L15.631,13.34A1.274,1.274,0,0,1,15.631,15.142Z"
                        transform="translate(-1.33 -2.15)"
                        fill="#fff"
                        stroke="#000"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
        {!isOpen && (
          <p
            key="whatIs"
            className="whatIsThis"
            onClick={() => setIsOpen(true)}
          >
            What is this 🤔??{" "}
          </p>
        )}
      </AnimatePresence>
    </div>
  );
};
export default GithubClone;
