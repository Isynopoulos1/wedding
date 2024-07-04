import { contentW, sizes, spaces } from "@utils";
import styled from "styled-components";

//MAIN CONTAINER
export const MainContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: ${contentW.desktop};
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
    line-height: 1.7;
    margin: 0;
    padding: 0;
  }
  .date {
    padding-bottom: ${sizes.xl};
    font-size: ${sizes.lg};
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

  //RESPONSIVE RULES
  @media only screen and (max-width: ${contentW.desktop}) {
    padding: 0 ${sizes.hg};

    .intro {
      font-size: ${sizes.md};
      padding: ${spaces.xs} 0;
    }
  }

  @media only screen and (max-width: ${contentW.mobile}) {
    padding: 0 ${sizes.md};
    p,
    a {
      font-size: ${sizes.md};
    }
    .date {
      font-size: ${sizes.md};
    }
  }
`;

//WHEN SECTION
export const WhenSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

//CONTAINERS
export const Containers = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: ${sizes.xll};
  @media only screen and (max-width: ${contentW.desktop}) {
    flex-direction: column;
    gap: 0;
  }
`;

//IMG
export const Img = styled.img`
  display: flex;
  width: ${sizes.super};
  @media only screen and (max-width: ${contentW.desktop}) {
    width: 100%;
  }
`;

//DETAILS CONTAINER
export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

//TEXT DETAILS
export const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${sizes.lg};
  line-height: 1.7;
  text-align: center;
  width: 100%;
  height: auto;
  align-items: center;
  p {
    margin: 0 ${spaces.sm};
  }
  @media only screen and (max-width: ${contentW.desktop}) {
    padding-top: ${spaces.xs};
    p {
      padding: 0 ${sizes.hg};
      margin: 0;
    }
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    padding-top: ${spaces.xs};
    p {
      padding: 0 ${sizes.md};
      font-size: ${sizes.md};
    }
  }
`;

//DETAILS CARDS
export const DetailsCards = styled.div`
  display: flex;
  height: ${sizes.xxl};
  align-items: center;
  gap: ${spaces.xs};
  justify-content: center;

  @media only screen and (max-width: ${contentW.tablet}) {
    font-size: ${sizes.lg};
    padding-top: ${spaces.xs};
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    flex-direction: column;
  }
`;

//CEREMONY
export const Ceremony = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${sizes.lg};
  text-align: center;

  p {
    margin: 0;
    font-size: ${sizes.lg};
  }

  .title {
    padding-bottom: ${sizes.md};
    font-weight: bold;
    font-size: ${sizes.lg};
  }

  .hour {
    font-size: ${sizes.lg};
    font-style: normal;
  }

  @media only screen and (max-width: ${contentW.desktop}) {
    p {
      font-size: ${sizes.lg};
    }
    .title {
      font-size: ${sizes.lg};
    }
    .hour {
      font-size: ${sizes.lg};
    }
  }

  @media only screen and (max-width: ${contentW.tablet}) {
    flex-direction: column;
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    p {
      font-size: ${sizes.md};
    }
    .title {
      font-size: ${sizes.md};
    }
    .hour {
      font-size: ${sizes.md};
    }
  }
`;

//RECEPTION
export const Reception = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${sizes.lg};
  text-align: center;

  p {
    margin: 0;
    font-size: ${sizes.lg};
  }

  .title {
    padding-bottom: ${sizes.md};
    font-weight: bold;
    font-size: ${sizes.lg};
  }

  .hour {
    font-size: ${sizes.lg};
    font-style: normal;
  }

  @media only screen and (max-width: ${contentW.desktop}) {
    p {
      font-size: ${sizes.lg};
    }
    .title {
      font-size: ${sizes.lg};
    }
    .hour {
      font-size: ${sizes.lg};
    }
  }

  @media only screen and (max-width: ${contentW.tablet}) {
    flex-direction: column;
  }
  @media only screen and (max-width: ${contentW.mobile}) {
    p {
      font-size: ${sizes.md};
    }
    .title {
      font-size: ${sizes.md};
    }
    .hour {
      font-size: ${sizes.md};
    }
  }
`;
