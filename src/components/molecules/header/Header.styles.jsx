import styled from "styled-components";
import { zindex, spaces, contentW, sizes, colors } from "@utils";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: ${zindex.header};
  width: 100%;
  height: ${spaces.ssm};
  display: flex;
  background-color: ${colors.white};
`;

export const HeaderContainer = styled.div`
  position: relative;
  max-width: ${contentW.desktop};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${contentW.desktop}) {
    max-width: 100%;
    padding: 0 ${spaces.xs};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  & > a {
    padding: 0 ${sizes.xs};
  }
  @media only screen and (max-width: ${contentW.tablet}) {
    flex-direction: column;
    font-size: ${sizes.hg};
    gap: ${spaces.xs};
    text-align: center;
  }
`;
export const LanguagesNav = styled.nav`
  display: flex;
  & > a:not(:last-child):after {
    content: "|";
    padding: 0 ${sizes.xs};
  }
  @media only screen and (max-width: ${contentW.tablet}) {
    display: flex;
    padding-top: ${spaces.sm};
    font-size: ${sizes.sm};
  }
`;

export const HeaderLeftContainer = styled.div`
  position: relative;
  display: flex;
  gap: ${sizes.xl};
`;
export const HeaderContainerRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${sizes.xl};
`;

export const MobileMenuContainer = styled.div`
  display: flex;
  top: 0;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  right: 0;
  z-index: ${zindex.base};
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;
