import React, { useState, useEffect } from "react";
import { contentW } from "@utils";

//IMPORT COMPONENTS
import Logo from "@atoms/logo/desktop/DesktopLogo";
import Link from "@atoms/link/Link";
import BurguerMenu from "@atoms/burguerMenu/BurguerMenu";
import ConfirmBtn from "@atoms/confirmBtn/ConfirmBtn";

//IMPORT STYLES
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

//IMPORT ASSETS
import { languages } from "@utils";

const Header = ({ toggleModal }) => {
  //HOOKS
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);

  //LIFECYCLES
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

  //HANDLE FUNCTIONS
  const handleTranslation = link => {
    alert(link);
  };

  const handleLink = link => {
    setToggle();
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", //center
        inline: "end", //end
      });
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  //DATA
  const links = [
    { label: "When", href: "when" },
    { label: "Where", href: "where" },
    { label: "How", href: "how" },
  ];

  //RENDER FUNCTIONS
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
          <React.Fragment key={language.name}>
            <Link
              label={language.name}
              onClick={() => handleTranslation("TODO LANGUAGE LOGIC")}
            />
            {index < languages.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </LanguagesNav>
    );
  };

  //MAIN RENDER
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
            <ConfirmBtn onClick={toggleModal} />
          </HeaderContainerRight>
        )}
        {isMobile && <BurguerMenu onClick={handleToggle} active={toggle} />}
      </HeaderContainer>
      {isMobile && toggle && (
        <MobileMenuContainer>
          {renderLinks()}
          <ConfirmBtn onClick={toggleModal} />
          {renderLanguages()}
        </MobileMenuContainer>
      )}
    </HeaderWrapper>
  );
};

export default Header;
