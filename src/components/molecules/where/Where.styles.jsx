import styled from "styled-components";
import { spaces, colors, contentW } from "@utils";

export const MainContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1500px;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 24px;
  padding-top: 30px;

  p {
    margin: 0;
    font-style: italic;
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
  .link {
    font-style: normal;
  }
  .title {
    font-weight: bold;
    padding-bottom: 10px;
    font-style: normal;
  }
  a {
    padding-top: 40px;
    font-size: 24px;
    color: black;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  position: relative;
`;

export const InnerImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/castell?updatedAt=1718698142499");
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;

  ${ImageContainer}:hover & {
    transform: scale(1.1);
  }
`;
