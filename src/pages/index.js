import React from 'react';
import { graphql } from 'graphql';

import { siteContentData } from '../constants/propTypes';

const IndexPage = ({ data }) => {
  console.log(data);

  return (
    <div>
      Home
    </div>
  );
};

IndexPage.propTypes = {
  ...siteContentData
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    siteContent: allPrismicDocument(filter: { type: {ne: "collection" } } ) {
      edges {
        node {
          data {
            siteTitle
            siteDescription {
              text
            }
            coverImage {
              url
            }
            phoneNumber
            emailAddress
            instagramUrl
            facebookUrl
          }
        }
      }
    }
  }
`;
