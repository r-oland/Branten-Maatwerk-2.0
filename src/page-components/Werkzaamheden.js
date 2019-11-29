// Components==============
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { Button, Container } from "mixins";
import React, { useState } from "react";
import styled from "styled-components";
import ModalWerkzaamheden from "../single-components/Modal";
import { Card } from "../style/Mixins";
// =========================

const Titel = styled.h2`
  position: relative;
  z-index: 1;
  text-align: center;
  margin: ${({ theme: { spacing } }) => `0 0 ${spacing.s7}`};

  @media screen and (min-width: 900px) {
    margin: ${({ theme: { spacing } }) => `0 0 ${spacing.s8}`};
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
  }
  margin: 0 auto;
  max-width: 1100px;

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media screen and (min-width: 1600px) {
    max-width: 1300px;
  }
`;

const Icon = styled.img`
  display: none;
  width: 42.5px;

  @media screen and (min-width: 600px) {
    display: block;
  }
`;

const Flex = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const WCard = styled(Card)`
  position: relative;
  max-width: 500px;
  height: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing.s5} ${spacing.s5}`};
  margin-bottom: ${({ theme: { spacing } }) => spacing.s8};
  text-align: center;

  @media screen and (min-width: 1100px) {
    height: 330px;
    padding: ${({ theme: { spacing } }) => `${spacing.s8} ${spacing.s7}`};
  }

  .wOmschrijving {
    margin: ${({ theme: { spacing } }) => `${spacing.s6} 0 0`};

    @media screen and (min-width: 600px) {
      text-align: left;
    }
  }

  .wButton {
    margin-top: ${({ theme: { spacing } }) => spacing.s5};

    @media screen and (min-width: 1100px) {
      position: absolute;
      bottom: ${({ theme: { spacing } }) => spacing.s7};
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Content = styled.div`
  h3 {
    margin: ${({ theme: { spacing } }) => `${spacing.s6} 0 ${spacing.s3}`};
  }

  ul {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s2};
  }

  li {
    margin-left: ${({ theme: { spacing } }) => spacing.s6};
    list-style: initial;

    p {
      margin: 0;
    }
  }

  p {
    margin: ${({ theme: { spacing } }) => `0 0 ${spacing.s2} `};
  }
`;

const SmoothScroll = styled.div`
  position: relative;
  top: -${({ theme: { spacing } }) => spacing.s10};
`;

export default function Werkzaamheden({ werkzaamheid1, werkzaamheid2 }) {
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

  // State

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const handleChange = () => {
    modalIsOpen === false ? setModalIsOpen(true) : setModalIsOpen(false);
  };

  const handleChange2 = () => {
    modalIsOpen2 === false ? setModalIsOpen2(true) : setModalIsOpen2(false);
  };

  // cards

  const W1 = () => {
    const typeWerk = werkzaamheid1.typeWerk;
    const icon = werkzaamheid1.icon.file.url;
    const korteOmschrijving = werkzaamheid1.korteOmschrijving.korteOmschrijving;

    return (
      <WCard key={typeWerk}>
        <Flex>
          <h3>{typeWerk}</h3>
          <Icon src={icon} alt={typeWerk} />
        </Flex>
        <p className="wOmschrijving">{korteOmschrijving}</p>
        <Button className="wButton" onClick={handleChange}>
          Lees meer
        </Button>
      </WCard>
    );
  };

  const W2 = () => {
    const typeWerk = werkzaamheid2.typeWerk;
    const icon = werkzaamheid2.icon.file.url;
    const korteOmschrijving = werkzaamheid2.korteOmschrijving.korteOmschrijving;

    return (
      <WCard key={typeWerk}>
        <Flex>
          <h3>{typeWerk}</h3>
          <Icon src={icon} alt={typeWerk} />
        </Flex>
        <p className="wOmschrijving">{korteOmschrijving}</p>
        <Button className="wButton" onClick={handleChange2}>
          Lees meer
        </Button>
      </WCard>
    );
  };

  const toelichting = werkzaamheid1.toelichtingLeesMeer.json;
  const toelichting2 = werkzaamheid2.toelichtingLeesMeer.json;

  return (
    <div>
      <Container>
        <SmoothScroll id="werkzaamheden" />
        <Titel>Werkzaamheden</Titel>
        <Wrapper>
          <W1 />
          <ModalWerkzaamheden
            modalIsOpen={modalIsOpen}
            handleChange={handleChange}
          >
            <Content>
              {documentToReactComponents(toelichting, richTextOptions)}
            </Content>
          </ModalWerkzaamheden>
          <W2 />
          <ModalWerkzaamheden
            modalIsOpen={modalIsOpen2}
            handleChange={handleChange2}
          >
            <Content>
              {documentToReactComponents(toelichting2, richTextOptions)}
            </Content>
          </ModalWerkzaamheden>
        </Wrapper>
      </Container>
    </div>
  );
}
