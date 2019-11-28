// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Card = styled.div`
  position: relative;
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  max-width: ${({ theme: { spacing } }) => spacing.s14};
  height: ${({ theme: { spacing } }) => spacing.s14};
  margin: 0 auto;
  overflow: hidden;
`;

const CTA = styled.p`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme: { white } }) => white};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: ${({ theme: { spacing } }) => `${spacing.s4} ${spacing.s4}`};
  background-color: ${({ theme: { primary } }) => primary.s4};
  width: 100%;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme: { primary } }) => primary.s6};
  }
`;

export default function CTACard({ children, cta }) {
  return (
    <Card>
      {children}
      <CTA>{cta}</CTA>
    </Card>
  );
}

// <CTACard cta={"Call to action"}></CTACard>
