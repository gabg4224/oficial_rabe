import { Catalog} from "@/components/catalog";
import { getItems } from "@/services/items";
import { Suspense } from "react";
export default function Admin({info}) {

  
    return (

        <>
      <Suspense fallback={<>Loading...</>}>
        <Catalog view={"homePageAdmin"} info={info}></Catalog>
        </Suspense>
   
        </>
    );
}

export const getServerSideProps = async () => {
    const info = await getItems()
  
   
    return { props: { info } };
  };