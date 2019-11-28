// Components==============
import { Container, flexUnit } from "mixins";
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
// =========================

const NavWrapper = styled.div`
  width: 100vw;
  transition: 0.5s;
  background-color: ${({ top, theme }) =>
    top === true ? `initial` : `${theme.primary.s4}`};

  ${({ fixed }) =>
    fixed === true &&
    css`
      position: fixed;
      top: 0;
      left: 0;
    `}
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: { spacing } }) => spacing.s9};
`;

const Logo = styled.div`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  ${flexUnit(2, 19, 20, "vw", "font-size")}
`;

const MenuItems = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;
  transition: 0.5s;
  color: ${({ top, theme }) =>
    top === true ? `${theme.gray.s7}` : `${theme.white}`};

  @media screen and (min-width: 900px) {
    display: flex;
  }

  li {
    padding-left: ${({ theme: { spacing } }) => spacing.s8};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    transition: 0.3s;

    &:hover {
      transform: translateY(-2px);
    }
  }

  a {
    color: ${({ top, theme }) =>
      top === true ? `${theme.gray.s7}` : `${theme.white}`};
  }
`;

export default function NavBar({ fixed }) {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position === 0) {
        setTop(true);
      } else {
        setTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <NavWrapper fixed={fixed} top={top}>
      <FlexContainer>
        <Logo>Logo</Logo>
        <MenuItems top={top}>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
          <li>Menu item 4</li>
        </MenuItems>
      </FlexContainer>
    </NavWrapper>
  );
}
