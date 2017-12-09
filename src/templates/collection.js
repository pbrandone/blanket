import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { allPrismicDocumentNode } from '../constants/propTypes';

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    max-width: 100%;
    max-height: calc(100vh - 100px);
    height: auto;

    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CollectionTemplate = ({ data }) => {
  const { node: { data: collection } } = data.allPrismicDocument.edges[0];

  return (
    <Gallery>
      {collection.gallery.map(({ photo }, i) => <img key={i} src={photo.url} />)}
    </Gallery>
  );
};

CollectionTemplate.propTypes = {
  ...allPrismicDocumentNode({
    data: PropTypes.shape({
      gallery: PropTypes.arrayOf(
        PropTypes.shape({
          photo: PropTypes.shape({
            url: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  })
};

export default CollectionTemplate;

export const query = graphql`
  query Collection($slug: String!) {
    allPrismicDocument(filter: { uid: { eq: $slug } } ) {
      edges {
        node {
          uid
          data {
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
