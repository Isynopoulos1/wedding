import React from "react";
import { Cross as Burger } from "hamburger-react";
//TODO: IMPORT PROPTYPES

import { MenuWrapper } from "./Menu.styles";

const Menu = () => {
  return (
    <MenuWrapper>
      <Burger />
    </MenuWrapper>
  );
};

export default Menu;
