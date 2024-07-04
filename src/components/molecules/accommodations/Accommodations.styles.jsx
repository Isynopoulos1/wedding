import { colors, contentW, sizes, spaces } from "@utils";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: ${contentW.desktop};
  margin: 0 auto;
  p {
    text-align: center;
    font-size: ${sizes.lg};
    line-height: 1.7;
    padding-bottom: ${sizes.xl};
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    p {
      font-size: ${sizes.md};
    }
  }
`;
export const AccommodationList = styled.div`
  position: relative;
  width: 100%;
  max-width: ${contentW.desktop};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  column-gap: ${sizes.xss};
  @media only screen and (max-width: ${contentW.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: ${sizes.super}) {
    grid-template-columns: repeat(1, 1fr);
  }

  a {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-grow: 0;
    flex-shrink: 1;
    height: ${sizes.xxll};
    width: calc(100% - 12px);
    width: 100%;
    text-decoration: none;
    color: ${colors.black};
    cursor: pointer;
    span {
      color: ${colors.black};
      &:hover {
        color: ${colors.silver};
        transition: background-color 0.3s ease;
      }
    }
  }
`;
