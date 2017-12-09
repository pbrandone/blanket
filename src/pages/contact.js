import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { allPrismicDocumentNode } from '../constants/propTypes';

import { Label, Link } from '../components/Typography/Typography';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 24px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Contact = ({ data }) => {
  const {
    phoneNumber,
    emailAddress,
    instagramUrl,
    facebookUrl
  } = data.allPrismicDocument.edges[0].node.data;

  return (
    <Wrapper>
      <Inner>
        <Block>
          <Label>
            Phone number
          </Label>
          <Link href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </Link>
        </Block>

        <Block>
          <Label>
            Email address
          </Label>
          <Link href={`mailto:${emailAddress}`}>
            {emailAddress}
          </Link>
        </Block>

        <Block>
          <Label>
            Instagram
          </Label>
          <Link target="_blank" rel="noopener noreferrer" href={instagramUrl}>
            {instagramUrl}
          </Link>
        </Block>

        <Block>
          <Label>
            Facebook
          </Label>
          <Link target="_blank" rel="noopener noreferrer" href={facebookUrl}>
            {facebookUrl}
          </Link>
        </Block>
      </Inner>
    </Wrapper>
  );
};

Contact.propTypes = {
  ...allPrismicDocumentNode({
    data: PropTypes.shape({
      phoneNumber: PropTypes.string.isRequired,
      emailAddress: PropTypes.string.isRequired,
      instagramUrl: PropTypes.string.isRequired,
      facebookUrl: PropTypes.string.isRequired
    })
  })
};

export default Contact;

export const query = graphql`
  query ContactPage {
    allPrismicDocument(filter: { type: {ne: "collection" } } ) {
      edges {
        node {
          data {
            phoneNumber
            emailAddress
            instagramUrl
            facebookUrl
          }
        }
      }
    }
  }
`;
