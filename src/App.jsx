import React, { useState } from "react";

//IMPORT STYLES
import { GlobalStyles } from "./App.styles";

//IMPORT COMPONENTS
import Footer from "@molecules/footer/Footer";
import Header from "@molecules/header/Header";
import When from "@atoms/when/When";
import Where from "@atoms/where/Where";
import How from "@atoms/how/How";
import Modal from "@organisms/modal/Modal";

const App = () => {
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

export default App;
