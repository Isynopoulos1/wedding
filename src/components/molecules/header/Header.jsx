import { contentW } from "@utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTranslate } from "react-redux-translates";

//IMPORT COMPONENTS
import BurguerMenu from "@atoms/burguerMenu/BurguerMenu";
import ConfirmBtn from "@atoms/confirmBtn/ConfirmBtn";
import Link from "@atoms/link/Link";
import Logo from "@atoms/logo/desktop/DesktopLogo";

//IMPORT STYLES
import {
  HeaderContainer,
  HeaderContainerRight,
  HeaderLeftContainer,
  HeaderWrapper,
  LanguagesNav,
  MobileMenuContainer,
  Nav,
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
    { label: translate("header.when"), href: "when" },
    { label: translate("header.where"), href: "where" },
    { label: translate("header.how"), href: "how" },
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
          <Link
            key={language.name}
            label={language.name}
            onClick={() => handleTranslation(language)}
          />
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
