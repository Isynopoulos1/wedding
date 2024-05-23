import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

//IMPORT STYLES TEST
import { Test } from "./App.styles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Test>
        <p className="light">light</p>
        <p className="regular">regular</p>
        <p className="bold">bold</p>
      </Test>
    </>
  );
};

export default App;
