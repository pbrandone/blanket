import styled from 'styled-components';

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    max-width: 100%;
    max-height: calc(100vh - 100px);
    height: auto;

    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 500px) {
      max-height: calc(100vh - 48px);

      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
