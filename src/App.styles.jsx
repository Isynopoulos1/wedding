import styled from "styled-components";
import { sizes, margins, weights } from "@utils";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Cammron';
  src: url('/fonts/Cammron-Bold.woff2') format('woff2'),
       url('/fonts/Cammron-Light.woff2') format('woff2'),
       url('/fonts/Cammron-Regular.woff2') format('woff2'),
       url('/fonts/Cammron-Round.woff2') format('woff2');
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

export const Test = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: ${sizes.hg};
  margin-top: ${margins.md};

  .light {
    font-weight: ${weights.light};
  }
  .regular {
    font-weight: ${weights.regular};
  }
  .bold {
    font-weight: ${weights.bold};
  }
`;
