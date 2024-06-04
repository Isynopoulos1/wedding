import React from "react";
//TODO: IMPORT USESTATE
//TODO: IMPORT LINK FROM ROUTER DOM

//IMPORT COMPONENTS
import Logo from "@atoms/logo/desktop/DesktopLogo";
import Link from "@atoms/link/Link";

//TODO: IMPORT STYLES
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeftContainer,
} from "./Header.styles";

// IMPORT ASSETS
import { languages } from "@utils";

const Header = () => {
  // HOOKS

  // LIFECYCLES

  // HANDLE FUNCTIONS
  const handleTranslation = link => {
    alert(link);
  };
  const handleLink = link => {
    alert(link);
  };

  // DATA
  const links = [
    { label: "When", href: "when" },
    { label: "Where", href: "where" },
    { label: "How", href: "how" },
  ];

  // RENDER FUNCTIONS

  // MAIN RENDER
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeftContainer>
          <Logo />
          <nav>
            {links.map(link => (
              <Link label={link.label} onClick={() => handleLink(link.href)} />
            ))}
          </nav>
        </HeaderLeftContainer>
        <nav>
          {languages.map(language => (
            <Link
              label={language.name}
              onClick={() => handleTranslation("TODO LANGUAGE LOGIC")}
            />
          ))}
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
