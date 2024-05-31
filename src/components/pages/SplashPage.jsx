import React from "react";
import { StyledSplashPage } from "./SplashPage.styles";
//IMPORT COMPONENTS
import LogoDesktop from "../elements/logo/LogoDesktop";

const SplashPage = () => {
  //MAIN RENDER
  return (
    <StyledSplashPage>
      <div className="line"></div>
      <LogoDesktop />
      <div className="title">Coming soon!</div>
      <div className="container-info">
        <p>Our wedding site is nearly ready. Stay tuned for updates!</p>
      </div>

      <div className="line"></div>
    </StyledSplashPage>
  );
};

export default SplashPage;
