import React from "react";
//IMPORT STYLES

import { HeroContainer, InfoContainer, MainContainer } from "./When.styles";
//IMPORT COMPONENTS
import Logo from "@atoms/logo/mobile/MobileLogo";

export const When = ({ onModalOpen }) => {
  return (
    <MainContainer id="when">
      <HeroContainer>
        <p className="greetings">Celebrate our wedding!</p>
        <div className="line"></div>
        <Logo />
        <div className="line"></div>
      </HeroContainer>
      <InfoContainer>
        <p>Sunday, October 27, 2024</p>
        <p className="intro">
          Two origins, two cultures, two languages, but one destiny.
          <br />
          Spain, halfway between France and Mexico, the rightful heir to our
          future world. <br />
          With joy, we invite you to our wedding ceremony, which will take place
          at Castell de Tous in Barcelona. <br />
          Your presence and support on this very special day mean a lot to us.
        </p>
        <a href="#" onClick={onModalOpen}>
          Confirm Attendance
        </a>
      </InfoContainer>
    </MainContainer>
  );
};

export default When;
