import React from "react";
import { BtnWrapper } from "./SendBtn.styles";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";

const sendBtn = ({ onClick }) => {
  const translate = useSelector(state => getTranslate(state.localize));
  return (
    <BtnWrapper onClick={onClick}>{translate("modal.send.btn")}</BtnWrapper>
  );
};

export default sendBtn;
