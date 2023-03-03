import { Theme } from "@mui/material/styles";
import "styled-components";

declare module "@mui/material/styles" {
  export interface Theme extends CustomTheme {}

  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
interface CustomTheme {}
