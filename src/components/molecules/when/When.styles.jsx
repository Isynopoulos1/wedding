import styled from "styled-components";
import { spaces, contentW, sizes, colors } from "@utils";

//MAIN CONTAINER
export const MainContainer = styled.section`
  margin: ${spaces.xxl} 0;
`;
//HERO CONTAINER
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

//INTRO CONTAINER
export const IntroContainer = styled.div`
  display: flex;
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
    padding-bottom: ${sizes.xl};
    font-size: ${sizes.md};
    font-style: italic;
  }
  .intro {
    font-size: ${sizes.xl};
    padding: ${spaces.sm} 0;
  }
  a {
    color: black;
    font-size: ${sizes.xl};
    padding-top: ${sizes.xl};
  }
  .line {
    width: 80%;
    height: 1px;
    background-color: ${colors.black};
    margin: ${spaces.md} 0px;
  }

  //RESPONSIVE RULES
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
    .line {
      margin: ${spaces.sm} 0px;
    }
  }
`;
//WHEN DETAILS
export const WhenSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    width: 80%;
    height: 1px;
    background-color: ${colors.black};
    margin: ${spaces.md} 0px;
  }
`;
export const Containers = styled.div`
  display: flex;
  width: 80%;
`;
export const Img = styled.img`
  width: 30%;
  height: auto;
`;
export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const DetailsCards = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 100px;
  gap: 100px;
`;

export const TextDetails = styled.div`
  display: flex;
  padding: 0 100px;
  padding-top: 100px;
  height: auto;
  text-align: center;
  font-size: 24px;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 0;
  }
`;
export const Ceremony = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: center;
  p {
    margin: 0;
  }
  .title {
    padding-bottom: 20px;
    font-weight: bold;
  }
  .hour {
    font-size: 20px;
  }
`;
export const Reception = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  text-align: center;
  p {
    margin: 0;
  }
  .title {
    font-weight: bold;
    padding-bottom: 20px;
  }
  .hour {
    font-size: 20px;
  }
`;
