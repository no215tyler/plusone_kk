import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DrawerAppBar from "@/components/DrawerAppBar";
import Footer from "@/components/Footer";
import HomeContents from "@/components/HomeContents";
import OGP from "@/components/OGP";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Plus One Co., Ltd.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <OGP />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <DrawerAppBar />
        <HomeContents />
        <Footer />
      </main>
    </>
  );
}
