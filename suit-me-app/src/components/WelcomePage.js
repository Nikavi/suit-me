import React, { useState } from "react";
import "./WelcomeStyles.css";
import backgroundImage from "./images/measurements.jpg";
import PopupContent from "./PopupContent";
import Measurements from "./Measurements";

const WelcomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNextStep, setShowNextStep] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  const handleNextStepClick = () => {
    setShowNextStep(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setShowNextStep(false);
  };
  return (
    <div className="welcome-container">
      <img src={backgroundImage} alt="" className="popup-image" />
      <div className="welcome-content">
        <h1 className="welcome-heading">SuitMe</h1>
        <h2 className="welcome-subheading">Find Your Perfect Fit</h2>
      
        <button className="welcome-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-frame">
            {!showNextStep && (
              <>
                <PopupContent />
                <h3>What is next?</h3>
                <p>Here is some tips about what to do next</p>
                <button
                  className="welcome-button"
                  onClick={handleNextStepClick}
                >
                  Next Step
                </button>
              </>
            )}
            {showNextStep && (
              <>
                <Measurements />
                <button className="welcome-button" onClick={handlePopupClose}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
