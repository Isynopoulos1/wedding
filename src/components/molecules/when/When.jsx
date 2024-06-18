import React from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";
//IMPORT STYLES

import {
  IntroContainer,
  MainContainer,
  WhenSection,
  HeroContainer,
  Img,
  Containers,
  TextDetails,
  Ceremony,
  Reception,
  DetailsCards,
  DetailsContainer,
} from "./When.styles";

//IMPORT COMPONENTS
import Logo from "@atoms/logo/mobile/MobileLogo";

export const When = ({ onModalOpen }) => {
  const translate = useSelector(state => getTranslate(state.localize));

  //HANDLE FUNCTIONS
  const handleLogoClick = () => {
    console.log("Logo clicked!");
    const section = document.getElementById("when");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
    }
  };

  return (
    <MainContainer>
      <HeroContainer id="hero" onClick={handleLogoClick}>
        <div className="line"></div>
        <Logo />
        <div className="line"></div>
      </HeroContainer>
      <IntroContainer id="when">
        <p className="date">{translate("when.date")}</p>
        <p>{translate("when.intro.1")}</p>
        <p>{translate("when.intro.2")}</p>
        <p>{translate("when.intro.3")}</p>
        <p>{translate("when.intro.4")}</p>
        <a href="#" onClick={onModalOpen}>
          Confirm Attendance
        </a>
      </IntroContainer>
      <WhenSection>
        <div className="line"></div>
        <Containers>
          <Img
            src="https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/iselayerwan.HEIC?updatedAt=1718651121135"
            alt="us"
          />
          <DetailsContainer>
            <TextDetails>
              <p>{translate("when.details.1")}</p>
              <p>{translate("when.details.2")}</p>
              <p>{translate("when.details.3")}</p>
            </TextDetails>
            <DetailsCards>
              <Ceremony>
                <p className="title">{translate("when.ceremony.1")}</p>
                <p className="hour">{translate("when.ceremony.2")}</p>
                <p>{translate("when.ceremony.3")}</p>
              </Ceremony>
              <Reception>
                <p className="title">{translate("when.reception.1")}</p>
                <p className="hour">{translate("when.reception.2")}</p>
                <p>{translate("when.reception.3")}</p>
              </Reception>
            </DetailsCards>
          </DetailsContainer>
        </Containers>

        <div className="line"></div>
      </WhenSection>
    </MainContainer>
  );
};

export default When;
