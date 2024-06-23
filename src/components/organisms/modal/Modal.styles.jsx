import styled from "styled-components";
import { zindex, colors, contentW, sizes, spaces } from "@utils";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${zindex.modal};
`;

export const ModalContent = styled.div`
  background: ${colors.white};
  padding: ${sizes.xl};
  border-radius: ${sizes.tiny};
  position: relative;
  min-width: ${contentW.desktop};

  @media only screen and (max-width: ${contentW.tablet}) {
    width: 100%;
    min-width: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${sizes.xss};
  right: ${sizes.xss};
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: ${sizes.xll};
  }
  p {
    font-size: ${sizes.xl};
  }
`;
export const Form = styled.form`
  font-family: roboto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  input,
  select,
  textarea {
    padding: ${sizes.tiny};
    font-size: ${sizes.ssm};
    margin-top: ${sizes.tiny};
    border: 1px solid ${colors.minimal};
    padding: ${spaces.tiny} 0;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: ${colors.black};
      outline: none;
    }
  }

  label {
    font-size: ${sizes.ssm};
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${sizes.ssm};

  input {
    display: none;
  }

  input:checked + span {
    background-color: ${colors.white};
    border-color: ${colors.black};
  }

  span {
    width: ${sizes.ssm};
    height: ${sizes.ssm};
    border: 1px solid ${colors.minimal};
    border-radius: 50%;
    display: inline-block;
    margin-right: ${sizes.tiny};
    position: relative;

    &::after {
      content: "";
      width: ${sizes.xss};
      height: ${sizes.xss};
      background-color: ${colors.black};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }

  input:checked + span::after {
    opacity: 1;
  }
`;
