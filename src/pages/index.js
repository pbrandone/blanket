import React from 'react';
import PropTypes from 'prop-types';

import { allPrismicDocumentNode } from '../constants/propTypes';

import Home from '../components/Home/Home';

const IndexPage = ({ data }) => {
  const image = data.allPrismicDocument.edges[0].node.data.coverImage.url;

  return (
    <Home coverImageUrl={image} />
  );
};

IndexPage.propTypes = {
  ...allPrismicDocumentNode({
    data: PropTypes.shape({
      coverImage: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  })
};

export default IndexPage;

export const indexQuery = graphql`
  query IndexPage {
    allPrismicDocument(filter: { type: {ne: "collection" } } ) {
      edges {
        node {
          data {
            coverImage {
              url
            }
          }
        }
      }
    }
  }
`;
