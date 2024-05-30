import styled from "styled-components";
import { margins, sizes, weights } from "@utils";

export const StyledSplashPage = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  min-height: 100vh;
  flex-direction: column;

  .title {
    font-size: ${sizes.xhg};
    margin-bottom: ${margins.xss};
    text-align: center;
  }

  .container-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: ${sizes.xl};
    font-weight: ${weights.light};
    text-align: center;
  }
  .container-info p {
    margin: 0;
  }
  @media only screen and (max-width: 700px) {
    .title {
      font-size: ${sizes.hg};
    }

    .container-info {
      font-size: ${sizes.md};
    }
  }
`;
