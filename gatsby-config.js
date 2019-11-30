require("dotenv").config();
const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Branten Maatwerk`,
    description:
      "Op zoek naar een klusbedrijf in regio Best? Lees hier wat de mogelijkheden zijn en vraag vrijblijvend een offerte aan. Een aanspreekpunt voor heel uw klus!",
    author: `Roland Branten`,
    siteUrl: `https://www.brantenmaatwerk.nl`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src/assets"),
        mixins: path.join(__dirname, "src/style/Mixins")
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Branten Maatwerk`,
        short_name: `B Maatwerk`,
        start_url: `https://www.brantenmaatwerk.nl`,
        background_color: `#00667D`,
        theme_color: `#00667D`,
        display: `standalone`,
        icon: `icon/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-153600146-1"
      }
    }
  ]
};
