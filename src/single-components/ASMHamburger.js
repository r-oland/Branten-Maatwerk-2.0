// Components==============
import Hamburger from "assets/Hamburger.inline.svg";
import { flexUnit } from "mixins";
import React from "react";
import styled from "styled-components";
// =========================

const SvgWrapper = styled.div`
  /* @media screen and (min-width: 1000px) {
    display: none;
  } */

  height: 25px;
  cursor: pointer;
  position: relative;
  z-index: 151;
  ${flexUnit(6, 30, 33, "vw", "width")}

  &:hover {
    .centerHamburger {
      width: 100%;
      right: 0;
    }
  }
`;

const MenuSvg = styled(Hamburger)`
  width: 100%;
  transition: 0.5s;

  #menu {
    fill: ${({ theme: { black } }) => black};
  }
`;

const MenuSvgTop = styled(MenuSvg)`
  position: absolute;
  right: 0;
  top: ${({ menustate }) => (menustate === "open" ? "10px" : "0")};
  transform: ${({ menustate }) =>
    menustate === "open" ? "rotate(225deg)" : "rotate(0)"};
`;

const MenuSvgCenter = styled(MenuSvg)`
  position: absolute;
  right: -4px;
  width: 80%;
  top: 10px;
  opacity: ${({ menustate }) => (menustate === "open" ? "0" : "1")};
`;

const MenuSvgBottom = styled(MenuSvg)`
  position: absolute;
  right: 0;
  top: ${({ menustate }) => (menustate === "open" ? "10px" : "20px")};
  transform: ${({ menustate }) =>
    menustate === "open" ? "rotate(135deg)" : "rotate(0)"};
`;

export default function ASMHamburger({ menuState, setMenuState }) {
  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <SvgWrapper onClick={changeMenu}>
      <MenuSvgTop menustate={menuState} className="topHamburger" />
      <MenuSvgCenter menustate={menuState} className="centerHamburger" />
      <MenuSvgBottom menustate={menuState} className="bottomHamburger" />
    </SvgWrapper>
  );
}

// INSERT IN NAVIGATION COMPONENT

// const [menuState, setMenuState] = useState("closed");

/* <ASMHamburger menuState={menuState} setMenuState={setMenuState} />
<ASMMenu
  menuState={menuState}
  setMenuState={setMenuState}
/> */
