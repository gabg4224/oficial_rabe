import { getPathsFromId,getInfoProducts } from "@/utils/utilsFunctions";

export default function cargos() {



    return(

<>

<h1>hola id</h1>
</>

    )
}


export async function getStaticPaths() {
    const paths = await getPathsFromId();
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const { id } = params;
    const info = await getInfoProducts(id);
    //const info2 = await getItemsShowed(first)
  
    return {
      props: info,revalidate: 60 // will be passed to the page component as props
    };
  }
  