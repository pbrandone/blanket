import React from 'react';
import { graphql } from 'graphql';

import { collectionsData } from '../constants/propTypes';

const CollectionTemplate = ({ data }) => {
  const { node: { data: collection } } = data.collection.edges[0];
  const { text: title } = collection.collection_title[0];

  return (
    <div>
      <h1>{title}</h1>

      <div>
        {collection.gallery.map(({ photo }, i) => <img key={i} src={photo.url} />)}
      </div>
    </div>
  );
};

CollectionTemplate.propTypes = {
  ...collectionsData
};

export default CollectionTemplate;

export const query = graphql`
  query Collection($slug: String!) {
    collections: allPrismicDocument(filter: { uid: { eq: $slug } } ) {
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
