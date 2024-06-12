import React from "react";

//IMPORT STYLES
import { GlobalStyles } from "./App.styles";

//TODO: IMPORT COMPONENTS
import Footer from "@molecules/footer/Footer";
import Header from "@molecules/header/Header";

//TODO: IMPORT RESET CSS

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div style={{ margin: "35rem 0" }}>CONTENT TO DO</div>
      <Footer />
    </>
  );
};

export default App;
