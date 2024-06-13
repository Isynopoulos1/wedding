import React, { useState } from "react";

//IMPORT STYLES
import { GlobalStyles } from "./App.styles";
import { spaces } from "@utils";

//TODO: IMPORT COMPONENTS
import Footer from "@molecules/footer/Footer";
import Header from "@molecules/header/Header";
import When from "@atoms/when/When";
import Where from "@atoms/where/Where";
import How from "@atoms/how/How";
//TODO IMPORT MODAL

//TODO: IMPORT RESET CSS

const App = () => {
  //HOOKS
  const [isConfirmed, setConfirmed] = useState(false);
  //TODO ADD MODAL HOOKS

  //LIFECYCLES

  //HANDLE FUNCTIONS
  const handleConfirmed = confirmed => {
    return setConfirmed(!confirmed);
  };

  return (
    <>
      <GlobalStyles />
      <Header active={isConfirmed} />
      <section id="when" style={{ margin: "35rem 0" }}>
        <When />
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
