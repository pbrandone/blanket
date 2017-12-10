import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { allPrismicDocumentNode } from '../constants/propTypes';

import MetaHead from '../components/SEO/MetaHead';
import PageTitle from '../components/Typography/PageTitle';

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

    @media (max-width: 500px) {
      max-height: calc(100vh - 48px);

      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const CollectionTemplate = ({ data }) => {
  const { node: { data: collection } } = data.allPrismicDocument.edges[0];
  const {
    collectionTitle,
    gallery,
    keywords,
    seoDescription,
    openGraphImage: { url: image }
  } = collection;
  const title = collectionTitle[0].text;
  const description = seoDescription[0].text;

  return (
    <Gallery>

      <MetaHead
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />

      <PageTitle>
        {title}
      </PageTitle>

      {gallery.map(({ photo }, i) => <img key={i} src={photo.url} />)}

    </Gallery>
  );
};

CollectionTemplate.propTypes = {
  ...allPrismicDocumentNode({
    data: PropTypes.shape({
      collectionTitle: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      gallery: PropTypes.arrayOf(
        PropTypes.shape({
          photo: PropTypes.shape({
            url: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      ).isRequired,
      keywords: PropTypes.string.isRequired,
      seoDescription: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      openGraphImage: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  })
};

export default CollectionTemplate;

export const query = graphql`
  query Collection($slug: String!) {
    allPrismicDocument(filter: { uid: { eq: $slug } } ) {
      edges {
        node {
          data {
            collectionTitle {
              text
            }
            gallery {
              photo {
                url
              }
            }
            keywords
            seoDescription {
              text
            }
            openGraphImage {
              url
            }
          }
        }
      }
    }
  }
`;
