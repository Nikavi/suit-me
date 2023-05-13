import React, { useState } from "react";
import "./WelcomeStyles.css";
import backgroundImage from "./images/measurements.jpg";

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
            {!showNextStep && (
              <>
                <h3>What is next?</h3>
                <p>Here is some text about what to do next</p>
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
                <h3>Congratulations!</h3>
                <p>You have completed the first step.</p>
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
