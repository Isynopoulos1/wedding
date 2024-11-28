import { colors, contentW, sizes, spaces } from "@utils";
import styled from "styled-components";

export const MainContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${contentW.desktop};
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  padding: 0 ${spaces.lg};
  height: auto;
  text-align: center;
  font-size: ${sizes.lg};
  justify-content: center;
  flex-direction: column;

  p {
    line-height: 1.7;
    margin: 0;
  }

  @media only screen and (max-width: ${contentW.desktop}) {
    padding: 0 ${sizes.hg};
  }

  @media only screen and (max-width: ${contentW.mobile}) {
    padding: 0 ${sizes.md};

    p {
      font-size: ${sizes.md};
    }
  }
`;
