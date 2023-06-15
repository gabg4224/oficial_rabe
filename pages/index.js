
import Banner from "@/components/banner";

import {Catalog} from "@/components/catalog";



export default function Home({ info }) {

 
  return (
    <>
      <Banner></Banner>
      <Catalog view={"homePage"} info={info}></Catalog>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const info = await res.json();

  console.log(info)
  return { props: { info } };
};