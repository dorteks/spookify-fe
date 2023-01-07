import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import AppProvider from "../src/api/providers";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AppProvider pageProps={pageProps}>
      {getLayout(<Component {...pageProps} />)}
    </AppProvider>
  );
};

export default MyApp;
