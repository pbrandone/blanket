import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import collectionsRoute from '../../../constants/collectionsRoute';

import { Label, MenuLink } from '../../Typography/Typography';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Menu = ({ collections }) => (
  <div>
    <MenuWrapper>
      <Label>
        Photography
      </Label>

      {collections.map(edge => {
        const { node: { data: collection, uid } } = edge;

        return (
          <MenuLink key={uid} to={`/${collectionsRoute}/${uid}`}>
            <h1>
              {collection.collectionTitle[0].text}
            </h1>
          </MenuLink>
        );
      })}
    </MenuWrapper>

    <MenuWrapper>
      <Label>
        About
      </Label>

      <MenuLink to="/contact">
        Contact
      </MenuLink>
    </MenuWrapper>
  </div>
);

Menu.propTypes = {
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

export default Menu;
