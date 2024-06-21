import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "react-redux-translates";
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

const Header = ({ toggleModal, setActiveLanguage }) => {
  //HOOKS
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  const translate = useSelector(state => getTranslate(state.localize));

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

  const handleTranslation = async language => {
    setToggle();
    await setActiveLanguage(language?.code);
  };

  const handleLink = link => {
    setToggle();
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogoClick = () => {
    const section = document.getElementById("hero");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "end",
      });
    }
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
              onClick={() => handleTranslation(language)}
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
          <Logo onClick={handleLogoClick} />
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
