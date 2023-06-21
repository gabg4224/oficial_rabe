import { ItemsTable } from "@/components/catalog";
import { getItemsByCategory } from "@/utils/utilsFunctions";

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
      <div className="pt-10 sm:px-3  flex items-center justify-center">
        <div className=" flex w-full items-center justify-center">
        <ItemsTable view={"card"} info={info}></ItemsTable>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const info = await getItemsByCategory("arriba");
console.log(info)
  return { props: { info } };
};
