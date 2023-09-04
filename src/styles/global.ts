// Packages
import { createGlobalStyle, css } from 'styled-components';

// Styles
import { Container } from 'styles/container';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props): string => props.theme.colors.yellow};
  }

  body {
    background-color: ${({ theme }): string => theme.colors.background};
    color: ${({ theme }): string => theme.colors['base-text']};
    --webkit-font-smoothing: antialised;
  }

  main {
    flex-grow: 1;
  }

  body,
  input,
  textarea,
  button {
    font-weight: 800;
    font-family: ${({ theme }): string => theme.fonts.default};
    font-size: ${({ theme }): string => theme.textSizes['text-m']};
  }

  a, li {
    text-decoration: none;
    list-style: none;
    color: inherit;
  }

  .container {
    ${Container};
  }
`;
