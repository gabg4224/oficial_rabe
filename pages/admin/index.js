import { Catalog} from "@/components/catalog";
import { getItems } from "@/services/items";

export default function Admin({info}) {

  
    return (

        <>
        <Catalog view={"homePageAdmin"} info={info}></Catalog>

   
        </>
    );
}

export const getServerSideProps = async () => {
    const info = await getItems()
  
   
    return { props: { info } };
  };