import React from "react";
import { BtnContainer } from "./ConfirmBtn.styles";

const ConfirmBtn = ({ onClick, onModalOpen }) => {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
    if (typeof onModalOpen === "function") {
      onModalOpen();
    }
  };

  return <BtnContainer onClick={handleClick}>Confirm Attendance</BtnContainer>;
};

export default ConfirmBtn;
