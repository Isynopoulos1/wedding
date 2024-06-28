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
  padding: ${sizes.hg};
  border-radius: ${sizes.tiny};
  position: relative;
  min-width: ${contentW.tablet};

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
    font-size: ${sizes.xxll};
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
