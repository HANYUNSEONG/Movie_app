import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyle = css`
  body {
    background-color: #f5f5f5;
  }
`;

export const GenresCard = styled.div`
  padding: .5em 1em;
  background-color: #eee;
  border-radius: 5px;
  display: inline-block;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: #ddd;
  }
`;