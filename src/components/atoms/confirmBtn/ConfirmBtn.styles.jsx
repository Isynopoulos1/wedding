import styled from "styled-components";
import { zindex, spaces, contentW, sizes, colors } from "@utils";

export const BtnContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${sizes.xs} ${sizes.xs};
  border: 1px solid ${colors.black};
  color: ${colors.black};
  background-color: ${colors.white};
  border-radius: 0;
  cursor: pointer;
  font-size: ${sizes.sm};
  &:hover {
    background-color: ${colors.silver};
    color: ${colors.white};
    border: 1px solid ${colors.silver};
    transition: background-color 0.3s ease;
  }
`;