import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/Auth/AuthProvider";
import Header from "../components/Header";

import { ShopCartProvider } from "../contexts/ShopCart/ShopCartContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <AuthProvider>
        <ShopCartProvider>
          <ThemeProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <CssBaseline />
          </ThemeProvider>
        </ShopCartProvider>
      </AuthProvider>
    </CacheProvider>
  );
}
