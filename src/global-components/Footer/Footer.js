// Components==============
import Location from "assets/location.svg";
import Mail from "assets/mail.svg";
import Phone from "assets/phone.svg";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  flexUnit,
  Ramp,
  StyledUnderline,
  Xs
} from "../../style/Mixins";
// =========================

const FooterFixed = styled.footer`
  margin-top: auto;
`;

const RampSvg = styled(Ramp)`
  height: calc(50px + 7vw);
  top: 1px;
`;

const Content = styled.div`
  color: ${({ theme: { gray } }) => gray.s2};
  background: ${({ theme: { gray } }) => gray.s9};
  text-align: center;

  h2 {
    padding: ${({ theme: { spacing } }) => `${spacing.s2} 0 ${spacing.s5}`};
  }
`;

const GridContainer = styled(Container)`
  @media screen and (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 75px 1fr;
    grid-row: 2;
  }
`;

const GridColumn = styled.div`
  grid-column: 3/4;
  grid-row: 1;

  @media screen and (min-width: 850px) {
    position: relative;
    bottom: 15px;
  }
`;

const GridColumn2 = styled.div`
  grid-column: 1/2;
  grid-row: 1;
`;

const ContactGegevens = styled.div`
  width: 260px;
  margin: 0 auto;

  @media screen and (min-width: 335px) {
    width: 300px;
    display: block;
  }
`;

const Locatie = styled.div`
  margin-top: ${({ theme: { spacing } }) => spacing.s7};
  padding-bottom: ${({ theme: { spacing } }) => spacing.s5};
  display: flex;
  p {
    color: ${({ theme: { white } }) => white};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

const LocationSVG = styled.img`
  width: 14px;
  margin-right: ${({ theme: { spacing } }) => spacing.s3};
`;

const Telefoon = styled.div`
  display: flex;
  span {
    color: ${({ theme: { white } }) => white};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

const PhoneSVG = styled.img`
  width: 14px;
  margin-right: ${({ theme: { spacing } }) => spacing.s3};
`;

const Email = styled(Button)`
  max-width: 300px;
  display: flex;
  margin: ${({ theme: { spacing } }) => `${spacing.s5} 0 ${spacing.s8}`};

  @media screen and (min-width: 500px) {
    margin-bottom: ${({ theme: { spacing } }) => spacing.s9};
  }

  p {
    color: ${({ theme: { white } }) => white};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  }
`;

const MailSVG = styled.img`
  display: none;
  width: 14px;
  margin-right: ${({ theme: { spacing } }) => spacing.s3};

  @media screen and (min-width: 335px) {
    display: block;
  }
`;

const Divider = styled.div`
  display: none;
  width: 4%;
  margin: auto auto;
  height: 250px;
  background: ${({ theme: { gray } }) => gray.s2};
  grid-column: 2/3;
  grid-row: 1;

  @media screen and (min-width: 850px) {
    display: block;
  }
`;

const WaardePunt = styled.div`
  @media screen and (min-width: 500px) {
    display: flex;
    text-align: left;
    align-items: center;
    margin: ${({ theme: { spacing } }) => `${spacing.s7} 0`};
  }
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;
  margin: ${({ theme: { spacing } }) => `${spacing.s4} auto ${spacing.s2}`};

  @media screen and (min-width: 500px) {
    margin: ${({ theme: { spacing } }) => ` 0 ${spacing.s4} 0 0`};
  }
`;

const WP = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing.s1};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};

  @media screen and (min-width: 500px) {
    ${flexUnit(2.5, 17, 18, "vw", "font-size")}
  }
`;

const Toelichting = styled.p`
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`;

const CopyRight = styled(Xs)`
  padding: ${({ theme: { spacing } }) => `${spacing.s8} 0 ${spacing.s4}`};
  grid-column: 1/4;
  grid-row: 2;

  @media screen and (min-width: 1800px) {
    padding: ${({ theme: { spacing } }) => `${spacing.s10} 0 ${spacing.s6}`};
  }
`;

const SmoothScroll = styled.div`
  position: relative;
  top: -${({ theme: { spacing } }) => spacing.s10};
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query footerContent {
      contentfulPaginaContent {
        contactVoorkeur {
          contactVoorkeur
        }
      }
      allContentfulWaardePunten {
        edges {
          node {
            icon {
              file {
                url
              }
            }
            waardePunt
            korteToelichting {
              korteToelichting
            }
          }
        }
      }
    }
  `);
  const contactVoorkeur =
    data.contentfulPaginaContent.contactVoorkeur.contactVoorkeur;
  const waardePunten = data.allContentfulWaardePunten.edges;

  const ValuePoints = waardePunten.map(edge => {
    const icon = edge.node.icon.file.url;
    const waardePunt = edge.node.waardePunt;
    const toelichting = edge.node.korteToelichting.korteToelichting;

    return (
      <WaardePunt key={waardePunt} className={waardePunt}>
        <Icon src={icon} alt={waardePunt} />
        <div>
          <WP>{waardePunt}</WP>
          <Toelichting>{toelichting}</Toelichting>
        </div>
      </WaardePunt>
    );
  });

  return (
    <FooterFixed>
      <RampSvg />
      <Content>
        <GridContainer>
          <GridColumn>
            <SmoothScroll id="contact" />
            <h2>Contact</h2>
            <p>{contactVoorkeur}</p>
            <ContactGegevens>
              <Locatie>
                <LocationSVG src={Location} alt="Location" />
                <p>Krijgertje 47 | 5683LC - Best</p>
              </Locatie>
              <a href="tel:06-120-58-195">
                <Telefoon>
                  <PhoneSVG src={Phone} alt="Phone" />
                  <StyledUnderline>06 120 58 195</StyledUnderline>
                </Telefoon>
              </a>
              <a href="mailto:werner@brantenmaatwerk.nl">
                <Email as="div">
                  <MailSVG src={Mail} alt="Mail" />
                  <p>werner@brantenmaatwerk.nl</p>
                </Email>
              </a>
            </ContactGegevens>
          </GridColumn>
          <Divider />
          <GridColumn2>{ValuePoints}</GridColumn2>
          <CopyRight>
            © Copyright - 2019 | Branten Maatwerk | Alle rechten gereserveerd
          </CopyRight>
        </GridContainer>
      </Content>
    </FooterFixed>
  );
}
