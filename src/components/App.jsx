import React, { useState, useEffect } from "react";
import { withLocalize } from "react-redux-translates";
import { activateTranslations } from "../utils";

//IMPORT STYLES
import { GlobalStyles } from "./App.styles";

//IMPORT COMPONENTS
import Footer from "@molecules/footer/Footer";
import Header from "@molecules/header/Header";
import Thanks from "@molecules/thanks/Thanks";
import Gallery from "@molecules/gallery/Gallery";

const App = ({ addTranslationForLanguage, setActiveLanguage }) => {
  // USE ONCE
  useEffect(() => {
    activateTranslations(addTranslationForLanguage);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header setActiveLanguage={setActiveLanguage} />
      <Thanks />
      <Gallery />
      <Footer />
    </>
  );
};

export default withLocalize(App);
