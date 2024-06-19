import styled from "styled-components";
import { spaces, colors, contentW, formW } from "@utils";

export const MainContainer = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${contentW.desktop};
  align-items: center;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: ${sizes.lg};
  padding-top: ${sizes.md};

  p {
    margin: 0;
    font-style: italic;
  }

  .link {
    font-style: normal;
  }
  .title {
    font-weight: bold;
    padding-bottom: ${sizes.md};
    font-style: normal;
  }
  a {
    padding-top: ${sizes.md};
    font-size: ${sizes.lg};
    color: black;
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

export const ImageContainer = styled.div`
  width: 100%;
  height: ${formW.md};
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
