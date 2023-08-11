import { ItemsTable } from "@/components/catalog";
import { getItemsByCategory } from "@/utils/utilsFunctions";
import { constantes} from "@/utils/constantes";
import { Suspense } from "react";
export default function seccionCargo({ info }) {


    if(info.length < 1 || !info){
        return(
            <>
            
            <div className=" w-full flex justify-center items-center h-screen">
                <h3 className=" md:text-lg capitalize sm:text-sm ">No se han encontrado articulos cargados aun...</h3>
            </div>
            
            
            </>
        )
    }
  return (
    <>
<Suspense fallback={<>Loading...</>}>
      <div className="sm:pt-10 lg:pt-20 sm:px-3  min-h-screen flex justify-center">
        <div className=" flex lg:w-10/12 justify-center ">
        <ItemsTable view={"card"} info={info}></ItemsTable>
        </div>
      </div>

      </Suspense>
    </>
  );
}

export const getStaticProps = async () => {
  const info = await getItemsByCategory(constantes.PARTE_DE_ABAJO);
console.log(info)
  return { props: { info },
  revalidate: 60 };
};
