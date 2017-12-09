import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../style/index';
import { allPrismicDocumentNode } from '../constants/propTypes';

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

  return (
    <Wrapper>
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
  }
`;
