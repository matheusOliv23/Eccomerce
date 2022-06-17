import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/Auth/AuthProvider";

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider
    // Provider options are not required but can be useful in situations where
    // you have a short session maxAge time. Shown here with default values.
    >
      <Component {...pageProps} />
    </AuthProvider>
  );
}
