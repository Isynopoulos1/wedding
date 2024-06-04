import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 64px;
  border: 1px solid red;
  background-color: white;
  display: flex;
`;

export const HeaderContainer = styled.div`
  position: relative;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1500px) {
    max-width: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const HeaderLeftContainer = styled.div`
  position: relative;
  display: flex;
`;
