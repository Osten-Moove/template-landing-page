import { Layout } from "@/layouts";
import { CssBaseline } from "@mui/material";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ThemeStore } from "src/context/ThemeStore";
import "src/i18n/index";
import Theme from "src/Theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeStore>
      <Theme>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </ThemeStore>
  );
}

export default appWithTranslation(App);
