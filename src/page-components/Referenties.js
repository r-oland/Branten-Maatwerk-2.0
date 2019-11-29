// Components==============
import React from "react";
import styled from "styled-components";
import Carousel2 from "../single-components/Carousel2";
import { Card, Container, L } from "../style/Mixins";
// =========================
const Titel = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s9} 0 ${spacing.s7}`};

  @media screen and (min-width: 900px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s11} 0 ${spacing.s8}`};
  }
`;

const RefContainer = styled(Container)`
  padding-bottom: ${({ theme: { spacing } }) => spacing.s10};

  @media screen and (min-width: 900px) {
    padding-bottom: ${({ theme: { spacing } }) => spacing.s13};
  }
`;

const RefCard = styled(Card)`
  height: 220px;
  max-width: 350px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  position: relative;
`;

const Zin = styled(L)`
  margin: ${({ theme: { spacing } }) => `${spacing.s5} 0 0`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

const Toelichting = styled.p`
  color: ${({ theme: { gray } }) => gray.s7};

  &::before {
    content: open-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: -4px;
    position: relative;
    top: 13px;
    color: ${({ theme: { primary } }) => primary.s7.replace("1)", "0.4)")};
    font-size: 2.5em;
  }
  &::after {
    content: close-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: 4px;
    position: relative;
    top: 27px;
    color: ${({ theme: { primary } }) => primary.s7.replace("1)", "0.4)")};
    font-size: 2.5em;
  }
`;

const Divider = styled.div`
  background-color: ${({ theme: { gray } }) => gray.s7};
  width: 60px;
  height: 2px;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
`;

const Naam = styled.p`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%);
`;

const SmoothScroll = styled.div`
  position: relative;
  top: -${({ theme: { spacing } }) => spacing.s10};
`;

export default function Referenties({ klantenReferenties }) {
  const CardSection = klantenReferenties.map(edge => {
    const naam = edge.node.voornaamKlant;
    const zin = edge.node.zinOmschrijving;
    const toelichting = edge.node.korteToelichting;

    return (
      <RefCard key={naam}>
        <Container>
          <Zin>{zin}</Zin>
          <Flex>
            <Toelichting>{toelichting}</Toelichting>
          </Flex>
          <Divider />
          <Naam>{naam}</Naam>
        </Container>
      </RefCard>
    );
  });

  return (
    <RefContainer>
      <SmoothScroll id="referenties" />
      <Titel>Wat klanten zeggen</Titel>
      <Carousel2>{CardSection}</Carousel2>
    </RefContainer>
  );
}
