
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Cammron';
  src: url('./fonts/Cammron-Regular.woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Cammron';
  src: url('./fonts/Cammron-Light.woff2');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Cammron';
  src: url('./fonts/Cammron-Bold.woff2');
  font-weight: 700;
  font-style: normal;
}

  body {
    font-family: 'Cammron', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;


