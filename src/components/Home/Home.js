import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import image from '../../assets/blanket-white@2x.png';

import collectionsRoute from '../../constants/collectionsRoute';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-image: url(${p => p.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

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
      <Wrapper image={coverImageUrl}>
        <Link to={collectionsRoute}>
          <Logo />
        </Link>
      </Wrapper>
    );
  }
}

Home.propTypes = {
  coverImageUrl: PropTypes.string.isRequired
};

export default Home;
