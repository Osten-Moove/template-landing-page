import { Theme } from '@mui/material/styles'
import 'styled-components'

interface CustomTheme {}

declare module '@mui/material/styles' {
  export interface Theme extends CustomTheme {}

  export interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
