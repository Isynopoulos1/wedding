import React, { useState } from "react";

//IMPORT STYLES
import { GlobalStyles } from "./App.styles";

//IMPORT COMPONENTS
import Footer from "@molecules/footer/Footer";
import Header from "@molecules/header/Header";
import When from "@atoms/when/When";
import Where from "@atoms/where/Where";
import How from "@atoms/how/How";

//TODO: IMPORT RESET CSS

const App = () => {
  //HOOKS
  const [isConfirmed, setConfirmed] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  //HANDLE FUNCTIONS
  const handleConfirmed = () => {
    console.log("Link clicked. Triggering Confirm button.");
    return setConfirmed(!isConfirmed);
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <GlobalStyles />
      <Header
        onConfirmClick={handleConfirmed}
        isModalOpen={isModalOpen}
        onModalOpen={handleModalOpen}
        onModalClose={handleModalClose}
      />
      <section id="when" style={{ margin: "35rem 0" }}>
        <When onConfirmClick={handleConfirmed} onModalOpen={handleModalOpen} />
      </section>
      <section id="where" style={{ margin: "35rem 0" }}>
        <Where />
      </section>
      <section id="how" style={{ margin: "35rem 0" }}>
        <How />
      </section>
      <Footer />
    </>
  );
};

export default App;
