import styled from "styled-components";
import { spaces, contentW, colors } from "@utils";

export const LineContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.minimal};
  margin: ${spaces.md} 0px;
  @media only screen and (max-width: ${contentW.tablet}) {
    margin: ${spaces.sm} 0px;
  }
`;
