import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { Inter } from "@next/font/google";
import MainApplicationLayout from "../src/layout";
import { trpc } from "../src/utils/trpc";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <MainApplicationLayout>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </MainApplicationLayout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
