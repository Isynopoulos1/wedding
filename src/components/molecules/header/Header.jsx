import React, { useState, useEffect } from "react";
import { contentW } from "@utils";

//IMPORT COMPONENTS
import Logo from "@atoms/logo/desktop/DesktopLogo";
import Link from "@atoms/link/Link";
import BurguerMenu from "@atoms/burguerMenu/BurguerMenu";
import ConfirmBtn from "@atoms/confirmBtn/ConfirmBtn";

//TODO: IMPORT STYLES
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeftContainer,
  HeaderContainerRight,
  Line,
  Nav,
  LanguagesNav,
  MobileMenuContainer,
} from "./Header.styles";

// IMPORT ASSETS
import { languages } from "@utils";

const Header = ({ onConfirmClick }) => {
  // HOOKS
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  // LIFECYCLES
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseInt(contentW.tablet, 10));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // HANDLE FUNCTIONS
  const handleTranslation = link => {
    alert(link);
  };

  const handleLink = link => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "end",
      });
    }
  };

  const handleToggle = () => {
    return setToggle(!toggle);
  };

  // DATA
  const links = [
    { label: "When", href: "when" },
    { label: "Where", href: "where" },
    { label: "How", href: "how" },
  ];

  // RENDER FUNCTIONS
  const renderLinks = () => {
    return (
      <Nav>
        {links.map(link => (
          <Link
            key={link.label}
            label={link.label}
            onClick={() => handleLink(link.href)}
          />
        ))}
      </Nav>
    );
  };
  const renderLanguages = () => {
    return (
      <LanguagesNav>
        {languages.map((language, index) => (
          <>
            <Link
              key={language.name}
              label={language.name}
              onClick={() => handleTranslation("TODO LANGUAGE LOGIC")}
            />
            {index < languages.length - 1 && <Line />}
          </>
        ))}
      </LanguagesNav>
    );
  };

  // MAIN RENDER
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeftContainer>
          <Logo />
          {!isMobile && renderLinks()}
        </HeaderLeftContainer>
        {!isMobile && (
          <HeaderContainerRight>
            {renderLanguages()}
            <ConfirmBtn onClick={onConfirmClick} />
          </HeaderContainerRight>
        )}
        {isMobile && <BurguerMenu onClick={handleToggle} active={toggle} />}
      </HeaderContainer>
      {isMobile && toggle && (
        <MobileMenuContainer>
          {renderLinks()}
          {renderLanguages()}
        </MobileMenuContainer>
      )}
    </HeaderWrapper>
  );
};

export default Header;
