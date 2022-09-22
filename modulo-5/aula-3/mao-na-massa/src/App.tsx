import {ThemeProvider} from "styled-components"
import { GlobalStyles } from "./styles/globals"
import {theme} from "./styles/theme";
import { AppRoutes } from "./routes";

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  )
  
}

