import styled from "styled-components";
import { colors } from "@utils";

export const StyledLink = styled.a`
  color: ${colors.black};
  text-decoration: none;
  padding: 10px 15px;
  transition: background-color 0.3s ease;

  &:hover {
    color: ${colors.silver};
  }
`;
