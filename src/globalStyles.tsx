import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --white: #FFFFFF;

    --black: #000000;

    --gray-700: #1A1A1E;

    --purple: #4e2b6e;
    --purple-100: #904ceb;

    --gray-100: #fafafc;
    --gray-200: #f5f5f7;
    --gray--700: #6e6e73;
    --gray-800: #333336;
    --gray-900: #1d1d1f;

    --font-xxxxl: clamp(1.75rem, 5vw, 3.75rem); // 60px novo
    --font-xxxl: clamp(1rem, 20vw, 2.5rem); // 40px
    --font-xxl: clamp(1.5rem, 7vw, 2.25rem); // 36px
    --font-xl: clamp(1.5rem, 5vw, 2rem); // 32px
    --font-l: clamp(0.2rem, 4vw , 1.5rem); // 24px
    --font-md: clamp(0.875rem, 5vw , 1.125rem); //18px novo
    --font-n: clamp(0.9rem, 2vw , 1rem); // 16px
    --font-sm: clamp(0.9rem, 2vw , 0.875rem); // 14px
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      border: 2px solid transparent;
    }
  }

  html, body, #root {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-family: "Noto Sans", sans-serif;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-border-radius: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #FFFFFF !important;
  }
`