import React from "react";

import { ModalWrapper, ModalContent, CloseButton } from "./Modal.styles";

const Modal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>CONFIRM ATTENDANCE</h2>
        {/* TODO: FORM */}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
