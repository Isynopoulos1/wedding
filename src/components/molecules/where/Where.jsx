import React from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";
import {
  MainContainer,
  SectionWrapper,
  ImageContainer,
  InnerImage,
} from "./Where.styles";

//IMPORT COMPONENTS
import Line from "@atoms/line/Line";

const Where = () => {
  const translate = useSelector(state => getTranslate(state.localize));
  return (
    <MainContainer id="where">
      <ImageContainer>
        <InnerImage />
      </ImageContainer>
      <SectionWrapper>
        <p className="title">{translate("where.text.1")}</p>
        <p>{translate("where.text.2")}</p>

        <a href="https://maps.app.goo.gl/bgR16fWZStxnXmBm6" target="_blank">
          <p className="link">{translate("where.text.3")}</p>
        </a>
        <Line />
      </SectionWrapper>
    </MainContainer>
  );
};

export default Where;
