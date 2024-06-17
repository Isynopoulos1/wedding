import React, { useState, useEffect } from "react";
import { withLocalize } from "react-redux-translates";
import { activateTranslations } from "../utils";

//IMPORT STYLES
import { GlobalStyles } from "./App.styles";

//IMPORT COMPONENTS
import Footer from "@molecules/footer/Footer";
import Header from "@molecules/header/Header";
import When from "@molecules/when/When";
import Where from "@molecules/where/Where";
import How from "@molecules/how/How";
import Modal from "@organisms/modal/Modal";

const App = ({ addTranslationForLanguage, setActiveLanguage, languages }) => {
  // USE ONCE
  useEffect(() => {
    activateTranslations(addTranslationForLanguage);
  }, []);
  //HOOKS
  const [isModalOpen, setModalOpen] = useState(false);

  //HANDLE FUNCTIONS
  const handleModal = () => {
    return setModalOpen(!isModalOpen);
  };

  return (
    <>
      <GlobalStyles />
      {isModalOpen && <Modal onClose={handleModal} />}
      <Header toggleModal={handleModal} />
      <When onModalOpen={handleModal} />
      <Where />
      <How />
      <Footer />
    </>
  );
};

export default withLocalize(App);