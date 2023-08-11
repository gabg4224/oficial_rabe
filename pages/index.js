import Banner from "@/components/banner";

import { Catalog } from "@/components/catalog";
import { getItems } from "@/services/items";
import { Suspense } from "react";
export default function Home({ info }) {
  return (
    <>
    <Suspense fallback={<>Loading...</>}>
    <Banner></Banner>
    </Suspense>
    <Suspense fallback={<>Loading...</>}>
    <Catalog view={"homePage"} info={info}></Catalog>
    </Suspense>
      
     
    </>
  );
}

export const getStaticProps = async () => {
  const info = await getItems();
  return { props: { info }, revalidate: 60 };
};

