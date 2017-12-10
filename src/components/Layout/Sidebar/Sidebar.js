import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import { cubic } from '../../../style/utils';

import Hamburguer from './Hamburguer';

const Wrapper = styled.div`
  flex-basis: 300px;
  flex-shrink: 0;

  overflow-y: scroll;

  margin: 50px;
  padding: 24px;

  background-color: white;

  @media (max-width: 1024px) {
    flex-basis: 200px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    overflow-y: hidden;

    height: ${p => p.open ? '100%' : '70px'};
    margin: 0;

    box-shadow: 0px 1px 2px rgba(0,0,0,0.05),
                0px 4px 8px rgba(0,0,0,0.05);

    transition: height ${cubic()};

    z-index: 999;
  }
`;

const MobileMenu = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 80px;

  @media (min-width: 769px) {
    & ${MobileMenu} {
      display: none;
    }
  }
`;

const Logo = styled.img.attrs({
  src: logo
})`
  height: 26px;
  width: auto;

  @media (max-width: 768px) {
    height: 20px;
  }
`;

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      isMenuOpen: false
    };
  }

  componentWillReceiveProps(newProps) {
    const { location: { pathname: newPath } } = newProps;
    const { location: { pathname: oldPath } } = this.props;

    // close the mobile menu when changing route
    if (newPath !== oldPath) {
      this.setState({ isMenuOpen: false });
    }
  }

  toggleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    return (
      <Wrapper open={this.state.isMenuOpen}>

        <Header onClick={this.toggleMenu.bind(this)}>
          <Logo />
          <MobileMenu>
            <Hamburguer
              open={this.state.isMenuOpen}
            />
          </MobileMenu>
        </Header>

        {this.props.children}

      </Wrapper>
    );
  }
}

Sidebar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.element.isRequired
};

export default withRouter(Sidebar);
