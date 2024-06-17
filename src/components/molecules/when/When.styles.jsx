import styled from "styled-components";
import { spaces, contentW, sizes, colors } from "@utils";

export const MainContainer = styled.section`
  margin: ${spaces.xxl} 0;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: ${spaces.md};
  @media only screen and (max-width: ${contentW.tablet}) {
    flex-direction: column;
    padding-top: 0;
  }

  .line {
    width: 80%;
    height: 1px;
    background-color: ${colors.black};
    margin: ${spaces.md} 0px;
    @media only screen and (max-width: ${contentW.tablet}) {
      margin: ${spaces.sm} 0px;
    }
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
    margin: 0;
    padding: 0;
  }
  .date {
    padding-bottom: 30px;
  }
  .intro {
    font-size: ${sizes.xl};
    padding: ${spaces.sm} 0;
  }
  a {
    color: black;
    font-size: ${sizes.xl};
  }
  @media only screen and (max-width: ${contentW.tablet}) {
    flex-direction: column;
    padding: 0 ${sizes.hg};

    p {
      font-size: ${sizes.md};
    }
    .intro {
      font-size: ${sizes.md};
      padding: ${spaces.xs} 0;
    }
    a {
      font-size: ${sizes.md};
    }
  }
`;
