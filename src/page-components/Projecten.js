// Components==============
import CylinderImp from "assets/Cylinder.inline.svg";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Carousel1 from "../single-components/Carousel1";
import CTACard from "../single-components/CTACard";
import { Container } from "../style/Mixins";
// =========================

const Titel = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s9} 0 ${spacing.s7}`};

  @media screen and (min-width: 900px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s11} 0 ${spacing.s8}`};
  }
`;

const CardTitle = styled.p`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  padding-top: ${({ theme: { spacing } }) => spacing.s4};
`;

const Slide = styled.div`
  position: relative;
  padding: 0 ${({ theme: { spacing } }) => spacing.s4};

  @media screen and (min-width: 800px) {
    margin-bottom: 35px;
  }
`;

const SlideImg = styled(Img)`
  height: calc(180px + 15vw);

  @media screen and (min-width: 800px) {
    height: 500px;
  }
`;

const CylinderSvg = styled(CylinderImp)`
  transform: scale(3.5);
  position: absolute;
  z-index: -1;
  width: 100vw;
  left: 0;
  top: -250px;

  @media screen and (min-width: 500px) {
    transform: scale(2.2);
  }

  @media screen and (min-width: 800px) {
    transform: scale(1.8);
    top: -280px;
  }

  @media screen and (min-width: 1200px) {
    transform: scale(1);
    top: -500px;
  }
`;

const SmoothScroll = styled.div`
  position: relative;
  top: -${({ theme: { spacing } }) => spacing.s13};
`;

export default function Projecten({ projecten }) {
  const SlideShow = projecten.map(edge => {
    const afbeelding = edge.node.eersteFoto.fluid;
    const titel = edge.node.titel;
    const slug = edge.node.slug;

    return (
      <Slide key={slug}>
        <SlideImg fluid={afbeelding} />
        <CTACard slug={slug} cta={"Bekijk project"}>
          <Container>
            <CardTitle>{titel}</CardTitle>
          </Container>
        </CTACard>
      </Slide>
    );
  });

  return (
    <div style={{ position: "relative" }}>
      <CylinderSvg />
      <Titel>Projecten</Titel>
      <SmoothScroll id="projecten" />
      <Carousel1>{SlideShow}</Carousel1>
    </div>
  );
}
