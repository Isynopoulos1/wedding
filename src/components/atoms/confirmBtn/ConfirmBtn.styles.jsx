import styled from "styled-components";
import { spaces, contentW, sizes, colors } from "@utils";

export const BtnContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${sizes.xs} ${sizes.xs};
  border: 1px solid ${colors.minimal};
  color: ${colors.black};
  background-color: ${colors.white};
  border-radius: 0;
  cursor: pointer;
  font-size: ${sizes.sm};
  &:hover {
    background-color: ${colors.hover};
    color: ${colors.black};
    border: 1px solid ${colors.black};
    transition: background-color 0.3s ease;
  }
  @media only screen and (max-width: ${contentW.tablet}) {
    margin-top: ${spaces.xs};
  }
`;
