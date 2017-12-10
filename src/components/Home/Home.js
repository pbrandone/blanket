import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import image from '../../assets/blanket-white@2x.png';

import collectionsRoute from '../../constants/collectionsRoute';

import FullImage from '../Layout/FullImage';

const Logo = styled.img.attrs({
  src: image
})`
  height: 72px;
  width: auto;
`;

class Home extends Component {
  componentWillMount() {
    this.timer = setTimeout(() => {
      window.___history.push(collectionsRoute); // eslint-disable-line
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { coverImageUrl } = this.props;
    return (
      <FullImage image={coverImageUrl}>
        <Link to={collectionsRoute}>
          <Logo />
        </Link>
      </FullImage>
    );
  }
}

Home.propTypes = {
  coverImageUrl: PropTypes.string.isRequired
};

export default Home;
