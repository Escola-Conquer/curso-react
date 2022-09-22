import {ThemeProvider} from "styled-components"
import { GlobalStyles } from "./styles/globals"
import {Home} from "./pages/Home"
import {theme} from "./styles/theme"
import { Header } from "./components/Header"


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  )
  
}

