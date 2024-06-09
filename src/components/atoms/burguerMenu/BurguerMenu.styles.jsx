import styled from "styled-components";
import { zindex } from "@utils";

export const MenuWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 100%;
  z-index: ${zindex.header};
  & .hamburger-react > * {
    height: 1px !important;
  }
`;
