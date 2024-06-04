import styled from "styled-components";
import { margins, sizes, weights } from "@utils";

export const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2 * ${margins.xss});
  height: ${margins.xs};

  @media only screen and (max-width: 700px) {
    position: fixed;
    bottom: 0;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${sizes.xss};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: ${sizes.xxs};
  margin-top: ${margins.xss};
  margin-bottom: ${margins.xss};
`;
