import React from "react";
import { BtnContainer } from "./ConfirmBtn.styles";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";

const ConfirmBtn = ({ onClick }) => {
  const translate = useSelector(state => getTranslate(state.localize));

  return (
    <BtnContainer onClick={onClick}>{translate("confirm.button")}</BtnContainer>
  );
};

export default ConfirmBtn;
