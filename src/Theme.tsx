import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";
import GlobalStyle from "src/styles/global";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { useThemeStore } from "./context/ThemeStore";
import Themes from "./styles/Themes";

interface ITheme {
  children: React.ReactNode;
}

function Theme({ children }: ITheme) {
  const { theme } = useThemeStore();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Themes[theme.type][theme.mode]}>
        <ThemeProviderStyled theme={Themes[theme.type][theme.mode]}>
          <GlobalStyle />
          {children}{" "}
        </ThemeProviderStyled>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Theme;
