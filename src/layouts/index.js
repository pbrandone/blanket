import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../style/index';
import { allPrismicDocumentNode } from '../constants/propTypes';

import MetaHead from '../components/SEO/MetaHead';
import Sidebar from '../components/Sidebar/Sidebar';
import Menu from '../components/Sidebar/Menu';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

const Content = styled.div`
  flex-basis: 100%;
  padding: 50px;

  overflow: hidden;
  overflow-y: scroll;

  -webkit-overflow-scrolling: touch;

  @media (max-width: 500px) {
    padding: 24px;
  }
`;

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
