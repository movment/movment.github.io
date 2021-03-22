import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    color: rgb(55, 53, 47);
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html, body{
    margin:0;
    padding:0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
