// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Img from "gatsby-image";
import React, { useState } from "react";
import styled from "styled-components";
import Slide1 from "../../single-components/Slide1";
import Slide2 from "../../single-components/Slide2";
import { Container } from "../../style/Mixins";
// =========================

const ProjectContainer = styled(Container)`
  padding-top: ${({ theme: { spacing } }) => spacing.s10};
  min-height: calc(100vh);
`;

const Flex = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const Uitleg = styled.div`
  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s4};
    margin-top: ${({ theme: { spacing } }) => spacing.s6};

    @media screen and (min-width: 1200px) {
      margin-top: 0;
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
  @media screen and (min-width: 1200px) {
    padding-left: ${({ theme: { spacing } }) => spacing.s4};
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
          <h2>{titel}</h2>
          {documentToReactComponents(werkzaamheden, richTextOptions)}
        </Uitleg>
      </Flex>
    </ProjectContainer>
  );
}
