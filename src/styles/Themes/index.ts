import { DefaultTheme } from 'styled-components'
import { DefaultDark, DefaultLight } from './Default'

export type ThemeMode = 'light' | 'dark'
export type ThemeType = 'default'

type IThemes = {
  // eslint-disable-next-line no-unused-vars
  [types in ThemeType]: {
    // eslint-disable-next-line no-unused-vars
    [modes in ThemeMode]: DefaultTheme
  }
}

const Themes: IThemes = {
  default: { light: DefaultLight, dark: DefaultDark },
}

export default Themes
