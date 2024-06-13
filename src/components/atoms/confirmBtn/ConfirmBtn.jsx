import React from "react";
import { BtnContainer } from "./ConfirmBtn.styles";

const ConfirmBtn = ({ onClick }) => {
  return <BtnContainer onClick={onClick}>Confirm Attendance</BtnContainer>;
};

export default ConfirmBtn;
