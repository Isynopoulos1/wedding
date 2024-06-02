import React from "react";

//IMPORT STYLES 
import { GlobalStyles } from "./App.styles";
import SplashPage from "./components/pages/SplashPage";
//TODO: IMPORT COMPONENTS
import Footer from "./components/layout/footer/Footer";

//TODO: IMPORT RESET CSS

const App = () => {
  return (
    <>
      <GlobalStyles />
      <SplashPage />
      <Footer/>
    </>
  );
};

export default App;
