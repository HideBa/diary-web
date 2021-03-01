import ThemeProvider from "@diary-app/styles/provider";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.css";
import AuthProvider from "@diary-app/auth/provider";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Component {...pageProps} />;
      </ThemeProvider>
    </RecoilRoot>
  );
}
