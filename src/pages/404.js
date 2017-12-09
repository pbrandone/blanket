import React from 'react';
import styled from 'styled-components';

import { Text } from '../components/Typography/Typography';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NotFoundPage = () => (
  <Wrapper>
    <Text>Not found</Text>
  </Wrapper>
);

export default NotFoundPage;
