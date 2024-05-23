// src/styles/GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Cammron';
    src: url('/fonts/Cammron-Bold.otf') format('opentype'),
         url('Cammron-Light.otf') format('opentype'),
         url('Cammron-Regular.otf') format('opentype'),
         url('Cammron-Round.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Cammron', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyles;
