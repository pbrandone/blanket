import React from 'react';
import PropTypes from 'prop-types';

import '../style/index';

import { allPrismicDocumentNode } from '../constants/propTypes';

import MetaHead from '../components/SEO/MetaHead';

const LandingPage = ({ children, data }) => {
  const {
    coverImage: { url: image },
    siteTitle: title,
    siteDescription,
    siteKeywords: keywords
  } = data.allPrismicDocument.edges[0].node.data;
  const description = siteDescription[0].text;

  return (
    <div>
      <MetaHead
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
      {children()}
    </div>
  );
};

LandingPage.propTypes = {
  children: PropTypes.func,
  ...allPrismicDocumentNode({
    data: PropTypes.shape({
      coverImage: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired,
      siteTitle: PropTypes.string.isRequired,
      siteDescription: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      siteKeywords: PropTypes.string.isRequired
    }).isRequired
  })
};

export default LandingPage;

export const query = graphql`
  query landingPage {
    allPrismicDocument(filter: { type: {ne: "collection" } } ) {
      edges {
        node {
          data {
            coverImage {
              url
            }
            siteTitle
            siteDescription {
              text
            }
            siteKeywords
          }
        }
      }
    }
  }
`;
