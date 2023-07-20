import Banner from "@/components/banner";

import { Catalog } from "@/components/catalog";
import { getItems } from "@/services/items";

export default function Home({ info }) {
  return (
    <>
      <Banner></Banner>
      <Catalog view={"homePage"} info={info}></Catalog>
    </>
  );
}

export const getStaticProps = async () => {
  const info = await getItems();
  return { props: { info }, revalidate: 60 };
};

