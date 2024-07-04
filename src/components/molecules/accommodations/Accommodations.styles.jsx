import { colors, contentW, sizes, spaces } from "@utils";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  p {
    text-align: center;
    font-size: 24px;
    line-height: 1.7;
    padding-bottom: 32px;
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    p {
      font-size: 20px;
    }
  }
`;
export const AccommodationList = styled.div`
  position: relative;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: 10px;
  @media only screen and (max-width: ${contentW.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }

  a {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
    height: 48px;
    width: calc(100% - 12px);
    width: 100%;
    text-decoration: none;
    color: black;
    cursor: pointer;
    span {
      color: black;
      &:hover {
        color: ${colors.silver};
        transition: background-color 0.3s ease;
      }
    }
  }
`;
