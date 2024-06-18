import styled from "styled-components";
import { spaces, contentW, sizes, colors } from "@utils";

//MAIN CONTAINER
export const MainContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;
`;
//HERO CONTAINER
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: ${contentW.tablet}) {
    flex-direction: column;
    padding-top: 0;
  }
  .line {
    width: 100%;
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
    font-size: ${sizes.xl};
    margin: 0;
    padding: 0;
  }
  .date {
    padding-bottom: ${sizes.xl};
    font-size: 24px;
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
    width: 100%;
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
export const WhenSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;

  .line {
    width: 100%;
    height: 1px;
    background-color: ${colors.black};
    margin: ${spaces.md} 0px;
  }
`;
export const Containers = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;

  @media only screen and (max-width: ${contentW.desktop}) {
    flex-direction: column;
  }
`;
export const Img = styled.img`
  display: flex;
  width: 500px;
  @media only screen and (max-width: ${contentW.desktop}) {
    width: 100%;
  }
`;
export const DetailsContainer = styled.div`
  width: 100%;
  justify-content: center;
`;
export const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  text-align: center;
  width: 100%;
  height: auto;
  align-items: center;
  padding-top: 150px;
  p {
    margin: 0;
  }
`;
export const DetailsCards = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  gap: 50px;
  justify-content: center;
`;
export const Ceremony = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  p {
    margin: 0;
    font-size: 24px;
  }
  .title {
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 24px;
  }
  .hour {
    font-size: 24px;
    font-style: italic;
  }
  @media only screen and (max-width: ${contentW.desktop}) {
    p {
      font-size: 20px;
    }
  }
`;
export const Reception = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  p {
    margin: 0;
    font-size: 24px;
  }
  .title {
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 24px;
  }
  .hour {
    font-size: 24px;
    font-style: italic;
  }
  @media only screen and (max-width: ${contentW.desktop}) {
    p {
      font-size: 20px;
    }
  }
`;
