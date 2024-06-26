import styled from "styled-components";
import { sizes, spaces } from "@utils";

export const FooterContainer = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2 * ${spaces.xss});
  height: ${spaces.xs};

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
  margin-top: ${spaces.xss};
  margin-bottom: ${spaces.xss};
`;
