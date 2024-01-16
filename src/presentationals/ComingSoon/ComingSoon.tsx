import AnimatedCursor from "react-animated-cursor";
import "./ComingSoon.scss";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <>
      <AnimatedCursor color="0,0,0" />
      <div className="ComingSoon">
        <div className="ComingSoon-content">
          <h2>
            Coming <span>soon</span>
          </h2>
          <p>Subscribe in my newsletter for the next features!</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email..." />
            <button>Subscribe</button>
          </div>
          <button className="back">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              className="icon"
            >
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
            </svg>
            <Link to="/PORTFOLIO">Go back</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CommingSoon;
