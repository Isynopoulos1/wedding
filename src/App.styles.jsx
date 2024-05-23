import styled from "styled-components";
import { sizes, margins, weights } from "@styles";

export const Test = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: ${sizes.hg};
  margin-top: ${margins.md};

  .light {
    font-weight: ${weights.light};
  }
  .regular {
    font-weight: ${weights.regular};
  }
  .bold {
    font-weight: ${weights.bold};
  }
`;
