// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../../global-components/Layout/Head";
import Layout from "../../global-components/Layout/Layout";
import Content from "./Content";
// =========================

export default function Template({ data }) {
  const titel = data.contentfulProjecten.titel;
  const werkzaamheden = data.contentfulProjecten.werkzaamheden.json;
  const afbeeldingen = data.contentfulProjecten.afbeeldingen;

  return (
    <Layout pageStyle="template">
      <Head
        title={titel}
        description={werkzaamheden}
        keywords="keuken voorbereiding, klusbedrijf, Best"
      />
      <Content
        titel={titel}
        werkzaamheden={werkzaamheden}
        afbeeldingen={afbeeldingen}
      />
    </Layout>
  );
}

export const query = graphql`
  query contentful2($slug: String!) {
    contentfulProjecten(slug: { eq: $slug }) {
      titel
      slug
      werkzaamheden {
        json
      }
      afbeeldingen {
        id
        fluid(maxWidth: 2500, quality: 90) {
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
`;
