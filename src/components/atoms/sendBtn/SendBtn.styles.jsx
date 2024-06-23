import styled from "styled-components";
import { zindex, colors, sizes } from "@utils";
export const BtnWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${sizes.xs} ${sizes.xs};
  border: 1px solid ${colors.minimal};
  color: ${colors.black};
  background-color: ${colors.white};
  border-radius: 0;
  cursor: pointer;
  font-size: ${sizes.sm};
  &:hover {
    background-color: #dedede;
    color: ${colors.black};
    border: 1px solid ${colors.silver};
    transition: background-color 0.3s ease;
  }
`;
