import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { cubic } from '../../../style/utils';

const Wrapper = styled.div`
  position: relative;

  width: 24px;
  height: 24px;

  cursor: pointer;
`;

const Line = styled.div`
  position: absolute;

  height: 2px;
  width: 24px;

  background-color: black;

  transform-origin: center;

  transition: transform ${cubic()};

  &:first-of-type {
    top: 6px;

    ${p => p.open && css`
      transform: rotate(45deg);

      top: 11px;
    `}
  }

  &:last-of-type {
    bottom: 6px;

    ${p => p.open && css`
      transform: rotate(135deg);

      top: 11px;
    `}
  }
`;

const Hamburguer = ({ open }) => (
  <Wrapper>
    <Line open={open} />
    <Line open={open} />
  </Wrapper>
);

Hamburguer.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Hamburguer;
