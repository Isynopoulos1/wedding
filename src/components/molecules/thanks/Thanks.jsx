import React from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";
import { MainContainer, InfoContainer } from "./Thanks.styles";
//IMPORT COMPONENTS
import Line from "@atoms/line/Line";
import Logo from "@atoms/logo/mobile/MobileLogo";

const Thanks = () => {
  const translate = useSelector(state => getTranslate(state.localize));
  return (
    <MainContainer id="thanks">
      <Line />
      <InfoContainer>
        <Logo />
        <p>{translate("thanks.text.1")}</p>
      </InfoContainer>

      <Line />
    </MainContainer>
  );
};

export default Thanks;
