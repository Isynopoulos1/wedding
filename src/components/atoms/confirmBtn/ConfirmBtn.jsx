import React from "react";
import { BtnContainer } from "./ConfirmBtn.styles";

const ConfirmBtn = () => {
  // HANDLE FUNCTIONS
  const handleClick = link => {
    alert(link);
  };
  //RENDER FUNCTIONS
  return (
    <BtnContainer onClick={() => handleClick("TODO BTN LOGIC")}>
      Confirm Attendance
    </BtnContainer>
  );
};

export default ConfirmBtn;
