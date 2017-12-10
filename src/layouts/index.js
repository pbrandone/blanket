import React from 'react';
import PropTypes from 'prop-types';

import '../style/index';
import { allPrismicDocumentNode } from '../constants/propTypes';

import { Wrapper, Content } from '../components/Layout/Layout';
import Sidebar from '../components/Layout/Sidebar/Sidebar';
import Menu from '../components/Layout/Sidebar/Menu';
import MetaHead from '../components/SEO/MetaHead';

const TemplateWrapper = ({ children, data }) => {
  const { allPrismicDocument: { edges: collections } } = data;
  const {
    coverImage: { url: image },
    siteTitle: title,
    siteDescription,
    siteKeywords: keywords
  } = data.seoContent.edges[0].node.data;
  const description = siteDescription[0].text;

  return (
    <Wrapper>

      <MetaHead
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />

      <Sidebar>
        <Menu collections={collections} />
      </Sidebar>

      <Content>
        {children()}
      </Content>

    </Wrapper>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  ...allPrismicDocumentNode({
    data: PropTypes.shape({
      collectionTitle: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  }, {
    seoContent: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
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
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  })
};

export default TemplateWrapper;

export const query = graphql`
  query CollectionsList {
    allPrismicDocument(filter: { type: {eq: "collection" } } ) {
      edges {
        node {
          uid
          data {
            collectionTitle {
              text
            }
          }
        }
      }
    }
    seoContent: allPrismicDocument(filter: { type: {ne: "collection" } } ) {
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
