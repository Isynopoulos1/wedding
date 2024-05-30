import React from "react";
import { StyledSplashPage } from "./SplashPage.styles";

const SplashPage = () => {
  //MAIN RENDER
  return (
    <StyledSplashPage>
      <div className="title">Coming soon!</div>
      <div className="container-info">
        <p>Our wedding website is almost ready.</p>
        <p>We're putting on the finishing touches.</p>
        <p>We'll notify you as soon as it's up and running.</p>
      </div>
    </StyledSplashPage>
  );
};

export default SplashPage;
