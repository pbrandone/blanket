import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../style/index';
import { allPrismicDocumentNode } from '../constants/propTypes';

import MetaHead from '../components/SEO/MetaHead';
import Sidebar from '../components/Sidebar/Sidebar';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const SidebarWrapper = styled.div`
  flex-basis: 300px;
  flex-shrink: 0;

  overflow-y: scroll;

  margin: 50px;
  background-color: white;
`;

const Content = styled.div`
  flex-basis: 100%;
  padding: 50px;

  overflow: hidden;
  overflow-y: scroll;
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

      <SidebarWrapper>
        <Sidebar collections={collections} />
      </SidebarWrapper>

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
