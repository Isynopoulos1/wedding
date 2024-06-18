import React from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";
import {
  MainContainer,
  SectionWrapper,
  ImageContainer,
  InnerImage,
} from "./Where.styles";

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
        <a href="https://www.uauu.cat/es/castell-de-tous/">
          Carrer del Castell, 1, Sant Martí de Tous.
        </a>
        <div className="line"></div>
      </SectionWrapper>
    </MainContainer>
  );
};

export default Where;
