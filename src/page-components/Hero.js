// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Container, Hill, Hill2, L } from "../style/Mixins";
// =========================

const HeroWrapper = styled.div`
  position: relative;
  margin-top: ${({ theme: { spacing } }) => spacing.s9};
  height: 100vh;
  width: 100vw;
`;

const ImageTest = styled(Img)`
  object-fit: cover;
  height: 100%;
`;

const MobileHill = styled(Hill2)`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100vw;
  height: 470px;

  @media screen and (min-width: 560px) {
    display: none;
  }
`;

const DesktopHill = styled(Hill)`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  height: 101vh;
  width: 130vw;

  @media screen and (min-width: 560px) {
    display: block;
  }

  @media screen and (min-width: 1000px) {
    width: 102.5vw;
  }
`;

const HeroText = styled.div`
  position: relative;
  bottom: 380px;

  @media screen and (min-width: 560px) {
    bottom: 65vh;
  }

  h1 {
    color: ${({ theme: { primary } }) => primary.s7};
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
    max-width: calc(270px + 10vw);

    @media screen and (min-width: 560px) {
      max-width: 300px;
      margin-bottom: ${({ theme: { spacing } }) => spacing.s3};
    }
  }

  p {
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    color: ${({ theme: { gray } }) => gray.s9};
    max-width: 90%;

    @media screen and (min-width: 560px) {
      max-width: 40%;
    }
  }
`;

export default function Hero({
  oneLiner,
  korteIntroductie,
  welkomschermAfbeelding
}) {
  return (
    <HeroWrapper>
      <ImageTest fluid={welkomschermAfbeelding} />
      <MobileHill />
      <DesktopHill />
      <Container>
        <HeroText>
          <h1>{oneLiner}</h1>
          <L>{korteIntroductie}</L>
        </HeroText>
      </Container>
    </HeroWrapper>
  );
}
