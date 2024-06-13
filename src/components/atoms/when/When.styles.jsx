import styled from "styled-components";
import { zindex, spaces, contentW, sizes, colors } from "@utils";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: ${sizes.xll}
    padding-top: ${spaces.lg};
  }
  .line {
    width: 80%;
    height: 1px;
    background-color: ${colors.black};
    margin: ${spaces.sm} 0px;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  padding: 0 ${sizes.xxxl};
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  p {
    font-size: ${sizes.lg};
  }
  .intro {
    font-size: ${sizes.xl};
  }
  a {
    color: black;
    font-size: ${sizes.xl};
  }
`;
