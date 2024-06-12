import React from "react";
import { Cross as Burger } from "hamburger-react";
//TODO: IMPORT PROPTYPES

import { MenuWrapper } from "./BurguerMenu.styles";

const BurguerMenu = ({ onClick }) => {
  return (
    <MenuWrapper onClick={onClick}>
      <Burger />
    </MenuWrapper>
  );
};

export default BurguerMenu;
