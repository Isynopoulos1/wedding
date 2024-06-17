import React from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";
//IMPORT STYLES

import { HeroContainer, InfoContainer, MainContainer } from "./When.styles";
//IMPORT COMPONENTS
import Logo from "@atoms/logo/mobile/MobileLogo";

export const When = ({ onModalOpen }) => {
  const translate = useSelector(state => getTranslate(state.localize));

  return (
    <MainContainer id="when">
      <HeroContainer>
        <div className="line"></div>
        <Logo />
        <div className="line"></div>
      </HeroContainer>
      <InfoContainer>
        <p className="date">Sunday, October 27, 2024</p>
        <p>{translate("when.intro.1")}</p>
        <p>{translate("when.intro.2")}</p>

        <a href="#" onClick={onModalOpen}>
          Confirm Attendance
        </a>
      </InfoContainer>
    </MainContainer>
  );
};

export default When;
