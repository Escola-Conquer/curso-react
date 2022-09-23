import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/globals';
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App;