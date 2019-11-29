// Components==============
import Logo from "assets/Branten-Maatwerk-Logo.svg";
import { Link } from "gatsby";
import { Container } from "mixins";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../../style/Mixins";
import ASMHamburger from "./ASMHamburger";
import ASMMenu from "./ASMMenu";
// =========================

const NavWrapper = styled.div`
  background: ${({ theme: { white } }) => white};
  width: 100vw;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};

  ${({ fixed }) =>
    fixed === true &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 148;
    `}
`;

const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: ${({ theme: { spacing } }) => spacing.s9};

  @media screen and (min-width: 1000px) {
    justify-content: space-between;
  }
`;

const LogoSVG = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 170px;
  top: 14px;

  @media screen and (min-width: 1000px) {
    position: initial;
    transform: initial;
  }
`;

const MenuItems = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;
  transition: 0.5s;
  color: ${({ theme: { gray } }) => gray.s7};

  @media screen and (min-width: 1000px) {
    display: flex;
  }

  li {
    padding-left: ${({ theme: { spacing } }) => spacing.s8};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    transition: 0.2s;
    color: ${({ theme: { gray } }) => gray.s7};

    &:hover {
      transform: translateY(-2px);
      color: ${({ theme: { primary } }) => primary.s7};
    }
  }
`;

export default function Nav() {
  const [menuState, setMenuState] = useState("closed");

  return (
    <NavWrapper fixed={true}>
      <FlexContainer>
        <ASMHamburger menuState={menuState} setMenuState={setMenuState} />
        <Link to="/">
          <LogoSVG src={Logo} alt="Branten-Maatwerk-Logo" />
        </Link>
        <MenuItems>
          <Link to="/#werkzaamheden">
            <li>werkzaamheden</li>
          </Link>
          <Link to="/#overMij">
            <li>Over mij</li>
          </Link>
          <Link to="/#projecten">
            <li>Projecten</li>
          </Link>
          <Link to="/#contact">
            <li>
              <Button>Contact</Button>
            </li>
          </Link>
        </MenuItems>
      </FlexContainer>
      <ASMMenu menuState={menuState} setMenuState={setMenuState} />
    </NavWrapper>
  );
}
