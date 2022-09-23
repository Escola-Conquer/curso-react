/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { theme } from '../styles/theme'

export type ThemeInterface = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
