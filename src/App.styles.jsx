import { margins, sizes, weights } from "@utils";
import styled from "styled-components";

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
  .italic {
    font-style: italic;
  }
`;
