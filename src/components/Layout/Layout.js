import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    padding-top: 70px;

    display: block;
  }
`;

export const Content = styled.div`
  flex-basis: 100%;
  padding: 50px;

  overflow: hidden;
  overflow-y: scroll;

  @media (max-width: 768px) {
    overflow: visible;
  }

  @media (max-width: 500px) {
    padding: 24px;
  }
`;
