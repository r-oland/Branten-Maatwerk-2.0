// Components==============
import { Link } from "gatsby";
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
// =========================

const Hide = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const Menu = styled.div`
  background-color: ${({ theme: { white } }) => white};
  width: ${({ menuState, theme: { spacing } }) =>
    menuState === "open" ? spacing.s13 : `0`};
  visibility: ${({ menuState }) =>
    menuState === "open" ? "visible" : `hidden`};
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 150;
  transition: 0.8s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ul {
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.8s;
  }

  li {
    cursor: pointer;
    transition: 0.2s;
    padding: ${({ theme: { spacing } }) => `${spacing.s6} 0 `};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

    &:hover {
      color: ${({ theme: { primary } }) => primary.s4};
    }
  }
`;

const Blur = styled.div`
  position: fixed;
  opacity: ${({ menuState }) => (menuState === "open" ? `0.3` : `0`)};
  visibility: ${({ menuState }) =>
    menuState === "open" ? `visible` : `hidden`};
  height: 100vh;
  width: 100vw;
  z-index: 149;
  background-color: black;
  top: 0;
  left: 0;
  transition: 0.8s;
`;

export default function ASMMenu({ menuState, setMenuState }) {
  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <Hide>
      <Menu menuState={menuState}>
        <Container>
          <ul>
            <Link to="/#werkzaamheden">
              <li onClick={changeMenu}>Werkzaamheden</li>
            </Link>
            <Link to="/#overMij">
              <li onClick={changeMenu}>Over mij</li>
            </Link>
            <Link to="/#projecten">
              <li onClick={changeMenu}>Projecten</li>
            </Link>
            <Link to="/#contact">
              <li onClick={changeMenu}>Contact</li>
            </Link>
          </ul>
        </Container>
      </Menu>
      <Blur menuState={menuState} />
    </Hide>
  );
}
