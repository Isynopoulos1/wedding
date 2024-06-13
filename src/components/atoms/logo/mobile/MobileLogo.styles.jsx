import styled from "styled-components";
import { sizes, zindex } from "@utils";

export const StyledLogo = styled.svg`
  display: flex;
  cursor: pointer;
  width: ${sizes.super};
  margin: 0;
  z-index: ${zindex.header};

  @media only screen and (max-width: 700px) {
    width: ${sizes.xll};
  }
`;
