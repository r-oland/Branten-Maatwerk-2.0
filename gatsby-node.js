const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve("./src/templates/projectTemplate/Template.js");
  const res = await graphql(`
    {
      allContentfulProjecten {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulProjecten.edges.forEach(edge => {
    createPage({
      component: template,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    });
  });
};
