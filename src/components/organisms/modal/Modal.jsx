import React, { useState } from "react";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";

import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  ModalHeader,
  Form,
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
    more: "",
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
    onClose();
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
          <label>
            {translate("modal.text.6")}
            <select
              name="isConfirmed"
              value={formData.isConfirmed}
              onChange={handleChange}
              required
            >
              <option value="YES">{translate("modal.text.7")}</option>
              <option value="NO">{translate("modal.text.8")}</option>
            </select>
          </label>
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
              name="more"
              value={formData.more}
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
