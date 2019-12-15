// Components==============
import React, { useState } from "react";
import styled from "styled-components";
import Carousel2 from "../single-components/Carousel2";
import { Card, Container, L, S } from "../style/Mixins";
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
  min-height: 250px;
  max-width: 350px;
  margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  position: relative;
  transition: 0.2s;
`;

const Zin = styled(L)`
  margin: ${({ theme: { spacing } }) => `${spacing.s5} 0 0`};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

const Toelichting = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  color: ${({ theme: { gray } }) => gray.s7};

  &::before {
    content: open-quote;
    display: inline;
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
    line-height: 0;
    left: 4px;
    position: relative;
    top: 27px;
    color: ${({ theme: { primary } }) => primary.s7.replace("1)", "0.4)")};
    font-size: 2.5em;
  }
`;

const LeesMeer = styled(S)`
  color: ${({ theme: { primary } }) => primary.s7};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  cursor: pointer;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Divider = styled.div`
  background-color: ${({ theme: { gray } }) => gray.s7};
  width: 60px;
  height: 2px;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  position: absolute;
  bottom: 45px;
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

const Hide = styled(Container)`
  visibility: ${e => {
    const element = e.children[0].props.children;
    const reference = e.reference;

    if (element === reference) {
      return "hidden";
    }
  }};
  position: ${e => {
    const element = e.children[0].props.children;
    const reference = e.reference;

    if (element === reference) {
      return "absolute";
    }

    return "initial";
  }};
`;

const Hide2 = styled(Container)`
  padding: ${({ theme: { spacing } }) => `${spacing.s6} 0`};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  text-align: left;
  visibility: ${e => {
    const element = e.children;
    const reference2 = e.reference2;

    if (element === reference2) {
      return "initial";
    }

    return "hidden";
  }};

  position: ${e => {
    const element = e.children;
    const reference2 = e.reference2;

    if (element === reference2) {
      return "initial";
    }

    return "absolute";
  }};
`;

export default function Referenties({ klantenReferenties }) {
  const [reference, SetReference] = useState(null);
  const [reference2, SetReference2] = useState(null);

  const CardSection = klantenReferenties.map(edge => {
    const id = edge.node.contentful_id;
    const naam = edge.node.voornaamKlant;
    const zin = edge.node.zinOmschrijving;
    const referentie = edge.node.referentie.referentie;
    const shortReferentie = referentie.slice(0, 50);

    const Unfold = () => {
      const Ref1 = document.querySelector(`#a${id}`).innerHTML;
      const Ref2 = document.querySelector(`.a${id}`).innerHTML;
      if (referentie.length > 100) {
        SetReference(Ref1);
        SetReference2(Ref2);
      }
    };

    const Fold = () => {
      SetReference(null);
      SetReference2(null);
    };

    const Referentie = () => {
      if (referentie.length > 100) {
        return (
          <div>
            <Toelichting>{shortReferentie}...</Toelichting>
            <LeesMeer>Lees recensie</LeesMeer>
          </div>
        );
      } else {
        return <Toelichting>{referentie}</Toelichting>;
      }
    };

    return (
      <RefCard key={naam} onMouseEnter={Unfold} onMouseLeave={Fold}>
        <Hide reference={reference}>
          <Zin id={`a${id}`}>{zin}</Zin>
          <Referentie />
          <Divider />
          <Naam>{naam}</Naam>
        </Hide>
        <Hide2 reference2={reference2} className={`a${id}`}>
          {referentie}
        </Hide2>
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
