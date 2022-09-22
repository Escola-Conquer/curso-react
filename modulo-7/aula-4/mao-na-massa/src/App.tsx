import { ThemeProvider } from "styled-components"

import { AppProvider } from "./hooks/index"

import { AppRoutes } from "./routes"

import { theme } from "./styles/theme"

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ThemeProvider>
  )
}
