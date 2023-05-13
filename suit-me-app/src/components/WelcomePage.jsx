import React from "react";
import {
  WelcomeContainer,
  Heading,
  Subheading,
  Description,
  Button,
} from "./WelcomeStyles";

const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <Heading>SuitMe</Heading>
      <Subheading>Find Your Perfect Fit</Subheading>
      <Description>
        Enter your body measurements and let us find the perfect size for you
      </Description>
      <Button>Get Started</Button>
    </WelcomeContainer>
  );
};

export default WelcomePage;
