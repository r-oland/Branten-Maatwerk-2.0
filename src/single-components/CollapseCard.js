// Components==============
import { S } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  height: 250px;
  max-width: 350px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  position: relative;
  background-color: ${({ theme: { white } }) => white};
  transition: 0.8s;
  box-shadow: ${({ theme: { shadow } }) => shadow.small};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  padding: ${({ theme: { spacing } }) => `${spacing.s4} ${spacing.s4}`};
  text-align: left;
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    margin-right: ${({ theme: { spacing } }) => spacing.s4};
    color: ${({ menuState, theme: { primary, black } }) =>
      menuState === "open" ? primary.s7 : black};
  }
`;

const Fold = styled.div`
  transition: 0.3s;
  max-height: ${({ menuState }) => (menuState === "open" ? "40vh" : `0`)};
  margin-top: ${({ menuState, theme: { spacing } }) =>
    menuState === "open" ? spacing.s5 : `0`};
  visibility: ${({ menuState }) =>
    menuState === "open" ? "visible" : `hidden`};

  p {
    opacity: ${({ menuState }) => (menuState === "open" ? "1" : `0`)};
    transition: 0.2s;
    color: ${({ theme: { gray } }) => gray.s8};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  }
`;

export default function CollapseCard({ initial, children }) {
  const [menuState, setMenuState] = useState("closed");

  function changeMenu() {
    menuState === "closed" ? setMenuState("open") : setMenuState("closed");
  }

  return (
    <Wrapper menuState={menuState} onClick={changeMenu}>
      <Flex menuState={menuState}>{initial}</Flex>
      <Fold menuState={menuState}>
        <S>{children}</S>
      </Fold>
    </Wrapper>
  );
}
