import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

// const GlobalStyles = createGlobalStyle`
//     ${reset}
//     * {
//         box-sizing: border-box;
//     }
//     html,
//     body {
//         font-size: 14px;
//         width: 100%;
//         height: 100%;
//     }
//     body {
//         background-color: #ffffff;
//         font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     }
//     a {
//         color: inherit;
//         text-decoration: none;
//         cursor: pointer;
//     }
//     input, button {
//         background-color: transparent;
//         border: none;
//         outline: none;
//     }
//     h1, h2, h3, h4, h5, h6 {
//         font-family: 'Maven Pro', sans-serif;
//     }
//     ol, ul, li {
//         list-style: none;
//     }
//     img {
//         display: block;
//         width: 100%;
//         height: 100%;
//     }
// `;

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  `;

/* export default GlobalStyles; */
