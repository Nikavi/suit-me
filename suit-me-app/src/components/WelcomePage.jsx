import React from "react";
import styled from "styled-components";

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f3f3f3;
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #555;
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  margin-bottom: 3rem;
  color: #777;
`;

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 2rem;
  padding: 1.5rem 3rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

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
