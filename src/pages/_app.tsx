import type { AppProps } from "next/app";

import GlobalStyles from "src/styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "src/styles/theme";
import { AuthProvider } from "src/contexts/Auth/AuthProvider";
import { ShopCartProvider } from "src/contexts/ShopCart/ShopCartContext";

export type ThemeType = typeof theme;

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ShopCartProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </ShopCartProvider>
    </AuthProvider>
  );
}
