// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Link } from "gatsby";
import Img from "gatsby-image";
import React, { useState } from "react";
import styled from "styled-components";
import Slide1 from "../../single-components/Slide1";
import Slide2 from "../../single-components/Slide2";
import { Button, Container } from "../../style/Mixins";
// =========================

const ProjectContainer = styled(Container)`
  padding-top: 90px;
  min-height: calc(100vh);
`;

const Flex = styled.div`
  @media screen and (min-width: 1390px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const Uitleg = styled.div`
  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    margin-top: ${({ theme: { spacing } }) => spacing.s6};

    @media screen and (min-width: 1390px) {
      margin-top: ${({ theme: { spacing } }) => spacing.s2};
    }
  }

  ul {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }

  li {
    margin-left: ${({ theme: { spacing } }) => spacing.s6};
    list-style: initial;
  }

  p {
    margin: ${({ theme: { spacing } }) => `0 0 ${spacing.s1} `};
  }
`;

const Slides = styled.div`
  @media screen and (min-width: 1390px) {
    padding-left: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

const Back1 = styled(Link)`
  display: none;

  background-color: ${({ theme: { primary } }) => primary.s2};
  @media screen and (min-width: 1390px) {
    display: inline;
  }
`;

const Back2 = styled(Link)`
  background-color: ${({ theme: { primary } }) => primary.s2};

  @media screen and (min-width: 1390px) {
    display: none;
  }

  .backButton {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
  }
`;

export default function Content({ titel, werkzaamheden, afbeeldingen }) {
  //rich text

  const richTextOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <img
            src={node.data.target.fields.file["en-US"].url}
            alt={node.data.target.fields.title["en-US"]}
          />
        );
      }
    }
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const images = afbeeldingen.map(afbeelding => {
    const img = afbeelding.fluid;
    const id = afbeelding.id;

    return <Img fluid={img} key={id}></Img>;
  });

  return (
    <ProjectContainer>
      <Back2 to="/#projecten">
        <Button className="backButton">Terug</Button>
      </Back2>
      <Flex>
        <Slides>
          <Slide1 setNav1={setNav1} nav2={nav2}>
            {images}
          </Slide1>
          <Slide2 setNav2={setNav2} nav1={nav1}>
            {images}
          </Slide2>
        </Slides>
        <Uitleg>
          <Back1 to="/#projecten">
            <Button>Terug</Button>
          </Back1>
          <h2>{titel}</h2>
          {documentToReactComponents(werkzaamheden, richTextOptions)}
        </Uitleg>
      </Flex>
    </ProjectContainer>
  );
}
