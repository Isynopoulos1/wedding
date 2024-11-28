import React from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";
import {
  MainContainer,
  InfoContainer,
 
} from "./Thanks.styles";
//IMPORT COMPONENTS
import Line from "@atoms/line/Line";

const Thanks = () => {
  const translate = useSelector(state => getTranslate(state.localize));
  return (
    <MainContainer id="thanks">
      <InfoContainer>
        <p>{translate("thanks.text.1")}</p>
        <p>{translate("thanks.text.2")}</p>
        <p>{translate("thanks.text.3")}</p>
      </InfoContainer>
      
    </MainContainer>
  );
};

export default Thanks;
