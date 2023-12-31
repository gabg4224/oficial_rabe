import Footer from "@/components/footer";
import { NewBar } from "@/components/newbar";
import ShoppingCart from "@/components/shoppingCart2";

import Head from "next/head";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Rabe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen flex flex-col h-full">
        <NewBar></NewBar>
        {children}

        <ShoppingCart></ShoppingCart>
        <Footer></Footer>
      </main>
      
    </>
  );
}
