import React from "react";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <p className="name-text">Hi, I'm Jacob!</p>
      <div className="small-text">
        <p className="fullstackdev">
          I’m a Full-Stack Developer, based in the SF Bay Area
        </p>
        <p className="second-small-text">
          Making the world a better place through creative software development,
          culture, and fun vibes
        </p>
      </div>
    </div>
  );
};

export default Banner;
