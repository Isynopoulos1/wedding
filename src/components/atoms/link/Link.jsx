import React from "react";
import { StyledLink } from "./Link.styles";

const Link = ({ label, onClick }) => {
  return <StyledLink onClick={onClick}>{label}</StyledLink>;
};

export default Link;
