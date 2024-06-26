import React, { useState } from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";

import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  ModalHeader,
  Form,
  RadioGroup,
  RadioLabel,
} from "./Modal.styles";
//IMPORT COMPONENTS
import SendBtn from "@atoms/sendBtn/SendBtn";

const Modal = ({ onClose }) => {
  const translate = useSelector(state => getTranslate(state.localize));
  //HOOKS
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isConfirmed: "",
    dietaryType: "Regular menu",
    other: "",
  });
  //HANDLE FUNCTIONS
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  //MAIN RENDER
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <span className="material-symbols-outlined">close_small</span>
        </CloseButton>
        <ModalHeader>
          <h1>{translate("modal.text.1")}</h1>
          <p>{translate("modal.text.2")}</p>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <label>
            {translate("modal.text.3")}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            {translate("modal.text.4")}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            {translate("modal.text.5")}
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <RadioGroup>
            <label>{translate("modal.text.6")}</label>
            <RadioLabel>
              <input
                type="radio"
                name="isConfirmed"
                value="yes"
                checked={formData.isConfirmed === "yes"}
                onChange={handleChange}
                required
              />
              <span></span>
              {translate("modal.text.7")}
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="isConfirmed"
                value="no"
                checked={formData.isConfirmed === "no"}
                onChange={handleChange}
                required
              />
              <span></span>
              {translate("modal.text.8")}
            </RadioLabel>
          </RadioGroup>

          <br />
          <label>
            {translate("modal.text.9")}
            <select
              name="dietaryType"
              value={formData.dietaryType}
              onChange={handleChange}
            >
              <option value="REGULAR_MENU">{translate("modal.text.10")}</option>
              <option value="GLUTEN_FREE">{translate("modal.text.11")}</option>
              <option value="VEGAN">{translate("modal.text.12")}</option>
            </select>
          </label>
          <br />
          <label>
            {translate("modal.text.13")}
            <textarea
              name="other"
              value={formData.other}
              onChange={handleChange}
              rows={4}
            />
          </label>
          <br />
          <SendBtn />
        </Form>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
