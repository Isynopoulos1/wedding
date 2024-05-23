import React from "react";

//IMPORT STYLES TEST
import { Test, GlobalStyles } from "./App.styles";

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
