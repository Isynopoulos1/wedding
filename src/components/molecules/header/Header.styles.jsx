import styled from "styled-components";
import { zindex, spaces, contentW, sizes, colors } from "@utils";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: ${zindex.header};
  width: 100%;
  height: ${spaces.ssm};
  display: flex;
`;

export const HeaderContainer = styled.div`
  position: relative;
  max-width: ${contentW.lg};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${contentW.lg}) {
    max-width: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${spaces.xs};
`;

export const HeaderLeftContainer = styled.div`
  position: relative;
  display: flex;
  gap: ${sizes.xl};
`;
export const HeaderContainerRight = styled.div`
  position: relative;
  display: flex;
  nav {
    display: flex;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: calc(80% - 20px);
  margin: auto;
  background-color: ${colors.black};
`;
