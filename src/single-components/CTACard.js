// Components==============
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Card = styled.div`
  position: relative;
  bottom: 20px;
  width: 80%;
  background-color: ${({ theme: { white } }) => white.replace("1)", "0.9)")};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  max-width: ${({ theme: { spacing } }) => spacing.s14};
  height: ${({ theme: { spacing } }) => spacing.s11};
  margin: 0 auto;
  overflow: hidden;
  text-align: center;

  @media screen and (min-width: 800px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -35px;
  }
`;

const CTA = styled.p`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme: { white } }) => white};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding: ${({ theme: { spacing } }) => `${spacing.s3} ${spacing.s4}`};
  background-color: ${({ theme: { primary } }) => primary.s2};
  width: 100%;
  transition: 0.4s;

  &:hover {
    background-color: ${({ theme: { primary } }) => primary.s6};
  }
`;

export default function CTACard({ children, cta, slug }) {
  return (
    <Card>
      {children}
      <Link to={`/${slug}`}>
        <CTA>{cta}</CTA>
      </Link>
    </Card>
  );
}

// <CTACard cta={"Call to action"}></CTACard>
