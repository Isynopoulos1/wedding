import React from "react";

//IMPORT STYLES TEST
import { GlobalStyles, Test } from "./App.styles";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Test>
        <p className="light">light</p>
        <p className="regular">regular</p>
        <p className="bold">bold</p>
        <p className="italic">bold</p>
        <p>WORK PLEASE</p>
      </Test>
    </>
  );
};

export default App;
