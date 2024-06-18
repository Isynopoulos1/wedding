import styled from "styled-components";
import { spaces, colors, contentW } from "@utils";

export const MainContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1500px;
  justify-content: center;
  align-items: center;
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
export const InfoContainer = styled.div`
  display: flex;
  padding: 0 100px;
  padding-top: 100px;
  height: auto;
  text-align: center;
  font-size: 32px;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

export const DetailCards = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 100px;
  gap: 100px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;

  height: 150px;
  .title {
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`;

export const Ceremony = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;

  text-align: center;
  p {
    margin: 0;
  }
  .hour {
    font-style: italic;
  }
`;
export const Bus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  text-align: center;
  p {
    margin: 0;
  }
  .hour {
    font-style: italic;
  }

  .title {
    padding-bottom: 24px;
    font-weight: bold;
  }
`;
export const Link = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: black;
  }
`;
