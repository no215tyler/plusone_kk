import GoogleAnalytics from "@/components/GoogleAnalytics";
import "@/styles/globals.css";
import * as gtag from "../lib/gtag";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.on("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}
