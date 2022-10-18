import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
  ${({ theme }) => css`
    html {
      font-size: 60%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.lightBg};
      min-height: 100vh;
      height: 100vh;
      overflow-x: hidden;
    }
  `}
`