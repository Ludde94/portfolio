import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/icon.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projekt
          </NavLink>
          <NavLink className="menu-item" to="about">
            Om mig
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Kontakt
          </NavLink>
        </NavMenu>
        <NavBtn>
        <a
          className="btn PrimaryBtn"
          href="/ludvig.PDF"
          download="ludvig.PDF"
        >
          CV
        </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
