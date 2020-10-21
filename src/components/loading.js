import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  background-color: ${({ theme }) => theme.background};

  div {
    text-align: center;
  }

  div > video {
    width: 12.5rem;
    height: 12.5rem;
    visibility: visible
  }

  div.loading__text {
    position: relative;
    top: -1.25rem;

    max-width: 18.75rem;

    user-select: none
  }

  div.loading__tip_title {
    margin-bottom: 0.5rem;

    color: #7289da;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1rem;
  }

  div.loading__tip {
    color: ${({ theme }) => theme.normalText};
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;
