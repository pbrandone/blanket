import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

export const Label = styled.span`
  font-family: SFUIText-Regular;
  font-size: 12px;
  text-transform: uppercase;
  color: #a2a4a6;

  padding-bottom: 24px;
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: black;
`;

export const MenuLink = styled(GatsbyLink).attrs({
  exact: true,
  activeClassName: 'is-active'
})`
  position: relative;
  font-size: 18px;
  line-height: 26px;
  color: #727476;

  text-decoration: none;

  padding-bottom: 8px;

  &:hover {
    color: black;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;

    left: 0;
    bottom: 4px;

    width: 0;
    height: 2px;

    background-color: black;

    transition: width cubic-bezier(.19, 1, .22, 1) 750ms;
  }

  &.is-active {
    color: black;

    &:after {
      width: 100%;
    }
  }
`;

export const Link = styled.a`
  font-size: 18px;
  line-height: 26px;
  color: #727476;

  text-decoration: none;

  &:hover {
    color: black;
  }
`;
