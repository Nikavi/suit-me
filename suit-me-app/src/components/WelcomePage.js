import React from "react";
import "./WelcomeStyles.css";

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">SuitMe</h1>
      <h2 className="welcome-subheading">Find Your Perfect Fit</h2>
      <p className="welcome-description">
        Enter your body measurements and let us find the perfect size for you
      </p>
      <button className="welcome-button">Get Started</button>
    </div>
  );
};

export default WelcomePage;
