import '@fontsource/play/400.css';
import '@fontsource/play/700.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Play', sans-serif;
    background: ${({ theme }) => theme.bg.page};
    color: ${({ theme }) => theme.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: 'Play', sans-serif;
  }

  input, textarea {
    font-family: 'Play', sans-serif;
  }
`;
