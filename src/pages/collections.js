import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'graphql';

import { collectionsData } from '../constants/propTypes';

const CollectionsPage = ({ data }) => {
  const { collections: { edges: collections } } = data;

  return (
    <div>
      {collections.map(edge => {
        const { node: { data: collection, uid } } = edge;

        return (
          <Link key={uid} to={`/${uid}`}>
            <h1>
              {collection.collectionTitle[0].text}
            </h1>
          </Link>
        );
      })}
    </div>
  );
};

CollectionsPage.propTypes = {
  ...collectionsData
};

export default CollectionsPage;

export const query = graphql`
  query CollectionsList {
    collections: allPrismicDocument(filter: { type: {eq: "collection" } } ) {
      edges {
        node {
          uid
          data {
            collectionTitle {
              text
            }
            gallery {
              photo {
                url
              }
            }
          }
        }
      }
    }
  }
`;
