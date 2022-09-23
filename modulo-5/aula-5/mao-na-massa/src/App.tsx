import { useState } from 'react'
import { GlobalStyles } from "./styles/global"
import {ThemeProvider} from 'styled-components'

import {theme} from './styles/theme'

import ListPokemon from './Pages/ListPokemon';

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ListPokemon />
    </ThemeProvider>
  )
}

export default App
