import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.grey[900]};
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    body, input, button {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    body, input, button {
      font-size: 87.5%;
    }
  }
`
