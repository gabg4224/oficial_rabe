import { Catalog} from "@/components/catalog";

export default function Admin({info}) {

  
    return (

        <>
        <Catalog view={"homePageAdmin"} info={info}></Catalog>

   
        </>
    );
}

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/products`);
    const info = await res.json();
  
   
    return { props: { info } };
  };