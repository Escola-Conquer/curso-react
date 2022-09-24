import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes";
import { GlobalStyles } from './styles/globals';
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App;