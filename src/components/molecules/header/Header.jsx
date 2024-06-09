import React, { useState, useEffect } from "react";

//TODO: IMPORT LINK FROM ROUTER DOM

//IMPORT COMPONENTS
import Logo from "@atoms/logo/desktop/DesktopLogo";
import Link from "@atoms/link/Link";
import BurguerMenu from "@atoms/burguerMenu/BurguerMenu";

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

const Header = () => {
  // HOOKS
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  // LIFECYCLES
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
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
    alert(link);
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
          <Link label={link.label} onClick={() => handleLink(link.href)} />
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
          <HeaderContainerRight>{renderLanguages()}</HeaderContainerRight>
        )}
        {isMobile && <BurguerMenu onClick={handleToggle} />}
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
