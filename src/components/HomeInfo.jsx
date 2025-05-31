import React, { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

// Schema for renderContent items
const InfoBox = ({ text, link, btnText }) => {
  const downloadResume = useCallback(() => {
    const link = import.meta.env.VITE_APP_REACT_APP_RESUME_URL;
    window.open(link, "_blank");
  }, []);
  const handleButtonClick = () => {
    if (btnText === "Get my resume") {
      downloadResume();
    }
  };

  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link
        to={link}
        className="neo-brutalism-white neo-btn"
        onClick={handleButtonClick}
      >
        {btnText}
        <img
          src={arrow}
          alt="arrow button"
          className="w-4 h-4 object-contain"
        />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Akshat </span>👋🏻
      <br />A web developer enthusiast
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on many projects and picked up many skills around the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Get into the details of my projects and resume."
      link="/project"
      btnText="Get my resume"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default memo(HomeInfo);
