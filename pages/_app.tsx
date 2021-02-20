import ThemeProvider from "@diary-app/styles/provider";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
