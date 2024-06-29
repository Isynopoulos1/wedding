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

export const DetailCards = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${spaces.md};
  gap: ${spaces.sm};

  @media only screen and (max-width: ${contentW.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${spaces.xs};
    padding-top: ${spaces.xs};
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: ${spaces.md};

  p {
    margin: 0;
    font-size: ${sizes.lg};
  }

  .title {
    padding-bottom: ${spaces.xss};
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .hour {
    font-style: italic;
  }

  @media only screen and (max-width: ${contentW.mobile}) {
    height: auto;
    p,
    .title,
    .hour {
      font-size: ${sizes.md};
    }
  }
`;

export const Link = styled.div`
  display: flex;
  justify-content: center;

  a {
    color: ${colors.black};
  }
`;

export const Ceremony = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  p {
    margin: 0;
    font-size: ${sizes.lg};
  }

  .hour {
    font-style: italic;
  }

  @media only screen and (max-width: ${contentW.mobile}) {
    p,
    .hour,
    .title {
      font-size: ${sizes.md};
    }
  }
`;

export const Bus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  p {
    margin: 0;
    font-size: ${sizes.lg};
  }

  .hour {
    font-style: italic;
  }

  .title {
    padding-bottom: ${spaces.xss};
    font-weight: bold;
  }

  @media only screen and (max-width: ${contentW.mobile}) {
    p,
    .hour,
    .title {
      font-size: ${sizes.md};
    }
  }
`;
