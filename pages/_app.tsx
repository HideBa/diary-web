import ThemeProvider from "@diary-app/styles/provider";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { config } from "@diary-app/auth/firebase";
import * as firebase from "firebase/app";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAuthProvider {...(config as any)} firebase={firebase}>
      <ThemeProvider>
        <Component {...pageProps} />;
      </ThemeProvider>
    </FirebaseAuthProvider>
  );
}
