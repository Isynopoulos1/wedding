import styled from "styled-components";
import { sizes } from "@utils";

export const StyledLogo = styled.svg`
  display: flex;
  cursor: pointer;
  width: ${sizes.mega};
  margin: 0;

  @media only screen and (max-width: 700px) {
    width: ${sizes.xxxl};
  }
`;
