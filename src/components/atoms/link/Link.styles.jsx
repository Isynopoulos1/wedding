import styled from "styled-components";
import { colors, sizes } from "@utils";

export const StyledLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
  text-decoration: none;
  height: ${sizes.xl};
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${colors.silver};
  }
`;
