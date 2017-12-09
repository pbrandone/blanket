const path = require('path');
const collectionsRoute = require('./src/constants/collectionsRoute');

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'PrismicDocument' && node.type === 'collection') {
    createNodeField({
      node,
      name: 'slug',
      value: node.uid
    });
  }
};

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise(resolve => {
    if (page.path === '/') {
      page.layout = 'landingPage';
      createPage(page);
    }

    resolve();
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;
  return new Promise(resolve => {
    graphql(`
      {
        allPrismicDocument(filter: { type: { eq: "collection" } } ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const firstSlug = result.data.allPrismicDocument.edges[0].node.fields.slug;

      createRedirect({
        fromPath: `/${collectionsRoute}`,
        redirectInBrowser: true,
        toPath: `${collectionsRoute}/${firstSlug}`
      });

      createRedirect({
        fromPath: `/${collectionsRoute}/`,
        redirectInBrowser: true,
        toPath: `/${collectionsRoute}/${firstSlug}/`
      });

      result.data.allPrismicDocument.edges.map(({ node }) => {
        createPage({
          path: `${collectionsRoute}/${node.fields.slug}`,
          component: path.resolve('./src/templates/collection.js'),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });

      resolve();
    });
  });
};
