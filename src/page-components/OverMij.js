// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Card2 from "../single-components/Card2";
import { Container } from "../style/Mixins";
// =========================

const Titel = styled.h2`
  text-align: center;
  margin: ${({ theme: { spacing } }) => `${spacing.s8} 0 ${spacing.s7}`};

  @media screen and (min-width: 900px) {
    margin: ${({ theme: { spacing } }) => `${spacing.s10} 0 ${spacing.s8}`};
  }
`;

const Card = styled.div`
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  padding: ${({ theme: { spacing } }) => `${spacing.s7} 0`};

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const ImageCircle = styled.div`
  width: 210px;
  margin: 0 auto ${({ theme: { spacing } }) => spacing.s7};
`;

const SmoothScroll = styled.div`
  position: relative;
  top: ${({ theme: { spacing } }) => spacing.s9};
`;

export default function OverMij({ headshot, headshot2, overMijInformatie }) {
  return (
    <Container>
      <SmoothScroll id="overMij" />
      <Titel>Wie heeft u over de vloer?</Titel>

      <Card>
        <ImageCircle>
          <Img fluid={headshot} alt="Werner Branten" />
        </ImageCircle>
        <Container>
          <p>{overMijInformatie}</p>
        </Container>
      </Card>
      <Card2 img={headshot2}>
        <Container>
          <p>{overMijInformatie}</p>
        </Container>
      </Card2>
    </Container>
  );
}
