import React, { useState } from "react";
import "./WelcomeStyles.css";
import backgroundImage from "./images/measurements.jpg";

const WelcomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  const handleNextStepClick = () => {
    // Handle next step click
  };

  return (
    <div className="welcome-container">
      <img src={backgroundImage} alt="" className="popup-image" />
      <div className="welcome-content">
        <h1 className="welcome-heading">SuitMe</h1>
        <h2 className="welcome-subheading">Find Your Perfect Fit</h2>
        <p className="welcome-description">
          <span className="description-text">
            SuitMe is an easy-to-use app that helps you find clothes that fit
            you perfectly.
            <br />
            No more guessing your size or struggling with ill-fitting clothes.
            With SuitMe, you can enter your body measurements and get
            personalized size recommendations for different brands and styles.
            Say goodbye to the frustration of shopping for clothes and hello to
            a more confident, comfortable you. <br />
            <br />
            <span className="description-goal">
              {" "}
              Try <span className="name">SuitMe</span> today and experience the
              difference!
            </span>
          </span>
        </p>
        <button className="welcome-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-frame">
            <h3>What is now?</h3>
            <p>Here is some text about what to do next</p>
            <button className="welcome-button" onClick={handleNextStepClick}>
              Next Step
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
