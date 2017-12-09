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

export const Link = styled(GatsbyLink).attrs({
  exact: true,
  activeClassName: 'is-active'
})`
  font-size: 18px;
  line-height: 26px;
  color: #727476;

  text-decoration: none;

  padding-bottom: 8px;

  &:hover {
    color: black;
  }

  &.is-active {
    color: black;
  }
`;
