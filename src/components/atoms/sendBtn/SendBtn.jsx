import React from "react";
import { BtnWrapper } from "./SendBtn.styles";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";

const sendBtn = ({ onClick }) => {
  const translate = useSelector(state => getTranslate(state.localize));
  const handleClick = () => {
    return console.log(" clicked");
    if (onClick) {
      onClick();
    }
  };
  return (
    <BtnWrapper onClick={handleClick}>{translate("modal.send.btn")}</BtnWrapper>
  );
};

export default sendBtn;
