const path = require('path');

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
  const { createPage } = boundActionCreators;
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
      result.data.allPrismicDocument.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
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
