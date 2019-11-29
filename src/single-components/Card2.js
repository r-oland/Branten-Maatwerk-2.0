// Components==============
import CurveImp from "assets/Curve.inline.svg";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

// =========================

const Card = styled.div`
  display: none;
  position: relative;
  border-radius: ${({ theme: { borderRadius2 } }) => borderRadius2};
  background-color: ${({ theme: { white } }) => white};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  max-width: 1000px;
  height: 320px;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const Image = styled(Img)`
  width: 32%;
  height: 100%;
  object-fit: cover;
`;

const CurveSvg = styled(CurveImp)`
  height: 105%;
  width: 40%;
  position: absolute;
  left: 10%;
  top: -2.5%;

  #changeColor {
    fill: ${({ theme: { white } }) => white};
  }
`;

const Content = styled.div`
  z-index: 1;
  width: 68%;
  display: flex;
  align-items: center;

  p {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.s4};
  }
`;

export default function Card2({ img, children }) {
  return (
    <Card>
      <Image fluid={img} alt="StockImg" />
      <CurveSvg />
      <Content>{children}</Content>
    </Card>
  );
}

/* <CurvedImageCard2 img={data.file.childImageSharp.fluid}></CurvedImageCard2> */
