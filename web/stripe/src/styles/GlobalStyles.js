import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  html {
    min-height: 100%;

    background-color: #fff;
  }

  *, button, input {
    font-family: 'Roboto', --apple-system, system-ui, sans-serif;
    border: 0;

    background: none;
  }

  ul {
    list-style: none;

    padding-left: 0;
  }
`;
