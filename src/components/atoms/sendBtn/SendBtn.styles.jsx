import styled from "styled-components";
import { zindex, colors, sizes } from "@utils";
export const BtnWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${sizes.xs} ${sizes.xs};
  border: none;
  color: ${colors.black};
  background-color: ${colors.minimal};
  border-radius: 0;
  cursor: pointer;
  font-size: ${sizes.sm};
  &:hover {
    background-color: ${colors.hover};
    color: ${colors.minimal};
    border: none;
    transition: background-color 0.3s ease;
  }
`;
