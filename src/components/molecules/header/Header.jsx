import React, { useState, useEffect } from "react";
//TODO: IMPORT USESTATE
//TODO: IMPORT LINK FROM ROUTER DOM

//IMPORT COMPONENTS
import Logo from "@atoms/logo/desktop/DesktopLogo";
import Link from "@atoms/link/Link";
import Menu from "@atoms/menu/Menu";

//TODO: IMPORT STYLES
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeftContainer,
  HeaderContainerRight,
  Line,
} from "./Header.styles";

// IMPORT ASSETS
import { languages } from "@utils";

const Header = () => {
  // HOOKS
  const [isMobile, setIsMobile] = useState(false);

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
        {!isMobile && (
          <HeaderContainerRight>
            <nav>
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
            </nav>
          </HeaderContainerRight>
        )}
      </HeaderContainer>
      {isMobile && <Menu />}
    </HeaderWrapper>
  );
};

export default Header;
