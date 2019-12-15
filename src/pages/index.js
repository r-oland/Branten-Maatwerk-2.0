// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Layout from "../global-components/Layout/Layout";
import Hero from "../page-components/Hero";
import OverMij from "../page-components/OverMij";
import Projecten from "../page-components/Projecten";
import Referenties from "../page-components/Referenties";
import Werkzaamheden from "../page-components/Werkzaamheden";
// =========================

export default function index({ data }) {
  const paginaContent = data.contentfulPaginaContent;

  const oneLiner = paginaContent.oneliner;
  const korteIntroductie = paginaContent.korteIntroductie.korteIntroductie;
  const overMijInformatie = paginaContent.overMijInformatie.overMijInformatie;
  const headshot = paginaContent.headshotAfbeelding.fluid;
  const headshot2 = paginaContent.headshotAfbeelding2.fluid;
  const welkomschermAfbeelding = paginaContent.welkomschermAfbeelding.fluid;
  const contactVoorkeur = paginaContent.contactVoorkeur.contactVoorkeur;

  const klantenReferenties = data.allContentfulKlantenReferenties.edges;
  const projecten = data.allContentfulProjecten.edges;
  const waardePunten = data.allContentfulWaardePunten.edges;
  const werkzaamheid1 = data.firstField;
  const werkzaamheid2 = data.secondField;

  return (
    <Layout waardePunten={waardePunten} contactVoorkeur={contactVoorkeur}>
      <Head
        title="Home"
        description="Op zoek naar een klusbedrijf in regio Best? Lees hier wat de mogelijkheden zijn en vraag vrijblijvend een offerte aan. Een aanspreekpunt voor heel uw klus!"
        keywords="klusbedrijf, Best, keuken voorbereiding"
      />
      <Hero
        oneLiner={oneLiner}
        korteIntroductie={korteIntroductie}
        welkomschermAfbeelding={welkomschermAfbeelding}
      />
      <Werkzaamheden
        werkzaamheid1={werkzaamheid1}
        werkzaamheid2={werkzaamheid2}
      />
      <OverMij
        headshot={headshot}
        headshot2={headshot2}
        overMijInformatie={overMijInformatie}
      />
      <Projecten projecten={projecten} />
      <Referenties klantenReferenties={klantenReferenties} />
    </Layout>
  );
}
// contentfull

export const query = graphql`
  query contentful {
    # pagina content
    contentfulPaginaContent {
      oneliner
      korteIntroductie {
        korteIntroductie
      }
      contactVoorkeur {
        contactVoorkeur
      }
      overMijInformatie {
        overMijInformatie
      }
      headshotAfbeelding {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      headshotAfbeelding2 {
        fluid(maxWidth: 1500) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      welkomschermAfbeelding {
        fluid(maxWidth: 4000, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }

    # klanten referenties
    allContentfulKlantenReferenties {
      edges {
        node {
          contentful_id
          voornaamKlant
          referentie {
            referentie
          }
          korteToelichting
        }
      }
    }
    # projecten
    allContentfulProjecten {
      edges {
        node {
          titel
          slug
          werkzaamheden {
            werkzaamheden
          }
          afbeeldingen {
            fluid(maxWidth: 1500, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          eersteFoto {
            fluid(maxWidth: 2500, quality: 90) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    # waarde punten
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
    # werkzaamheden
    firstField: contentfulWerkzaamheden(wId: { eq: 1 }) {
      wId
      typeWerk
      korteOmschrijving {
        korteOmschrijving
      }
      toelichtingLeesMeer {
        json
      }
      icon {
        file {
          url
        }
      }
    }
    secondField: contentfulWerkzaamheden(wId: { eq: 2 }) {
      wId
      typeWerk
      korteOmschrijving {
        korteOmschrijving
      }
      toelichtingLeesMeer {
        json
      }
      icon {
        file {
          url
        }
      }
    }
  }
`;
