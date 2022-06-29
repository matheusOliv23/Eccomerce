import type { AppProps } from "next/app";
import Head from "next/head";
import { AuthProvider } from "../contexts/Auth/AuthProvider";
import Header from "../components/Header";
import "../styles/globals.scss";

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </AuthProvider>
  );
}
