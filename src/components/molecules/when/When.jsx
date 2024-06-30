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
import Line from "@atoms/line/Line";

export const When = ({ onModalOpen }) => {
  const translate = useSelector(state => getTranslate(state.localize));

  //HANDLE FUNCTIONS
  const handleLogoClick = () => {
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
        <Logo />
        <Line />
      </HeroContainer>
      <IntroContainer id="hero">
        <p className="date">{translate("when.date")}</p>
        <p>{translate("when.intro.1")}</p>
        <p>{translate("when.intro.2")}</p>
        <p>{translate("when.intro.3")}</p>
        <p>{translate("when.intro.4")}</p>
        <a href="#" onClick={onModalOpen}>
          {translate("confirm.button")}
        </a>
      </IntroContainer>
      <WhenSection id="when">
        <Line />
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
              <p>{translate("when.details.4")}</p>
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

        <Line />
      </WhenSection>
    </MainContainer>
  );
};

export default When;
