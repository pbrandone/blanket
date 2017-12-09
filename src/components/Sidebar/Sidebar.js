import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import collectionsRoute from '../../constants/collectionsRoute';

import { Label, Link } from '../Typography/Typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 24px;
`;

const Logo = styled.img.attrs({
  src: logo
})`
  margin-bottom: 80px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Sidebar = ({ collections }) => {
  return (
    <Wrapper>
      <Logo />

      <MenuWrapper>
        <Label>
          Photography
        </Label>

        {collections.map(edge => {
          const { node: { data: collection, uid } } = edge;

          return (
            <Link key={uid} to={`/${collectionsRoute}/${uid}`}>
              <h1>
                {collection.collectionTitle[0].text}
              </h1>
            </Link>
          );
        })}
      </MenuWrapper>

      <MenuWrapper>
        <Label>
          About
        </Label>

        <Link to="/contact">
          Contact
        </Link>
      </MenuWrapper>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        uid: PropTypes.string.isRequired,
        data: PropTypes.shape({
          collectionTitle: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string.isRequired
            }).isRequired
          ).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  ).isRequired
};

export default Sidebar;
