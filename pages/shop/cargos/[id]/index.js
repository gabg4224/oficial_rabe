import { getInfoProducts, getPathsFromId } from "@/utils/utilsFunctions";
import { useState } from "react";
import Image from "next/image";
import { DocumentTextIcon } from "@heroicons/react/20/solid";
import Stocker from "@/components/stocker";
import CartButton from "@/components/cartButton";
export default function CargosDinamic({ info }) {



  console.log(info.color[0].tallas);
  const [activeColor, setActiveColor] = useState({
    talla: info.color[0].tallas,
    tallaActive: info.color[0].tallas[0],
    colorCode: info.color[0].colorCode,
    images: info.color[0].imagenes,
  });

  const [item, setItem] = useState({
    id: info._id,
    description: info.description,
    title: info.title,
    price: info.price,
    color: info.color[0].colorTitle,
    talla: info.color[0].tallas,
  });



  const sizeHandler = (item) => {
    setActiveColor({
      ...activeColor,
      tallaActive: item,
    });

    console.log(activeColor.tallaActive);
  }

  return (
    <>
      <div className="h-6 "></div>
      <div className="w-full min-h-[80vh]  pt-4 flex justify-center bg-gray-100">
        <div className="flex sm:flex-col lg:flex-row h-full sm:w-full lg:w-[80%]">
          <div className=" flex lg:w-7/12 bg-zinc-600  ">
            <div className="h-full w-full flex justify-center items-center"> 
            <Image src={info.color[0].imagenes[0].imagen} width={3000} height={3000} alt="asad">
              
            </Image>
            </div>
          </div>
          <div className="flex flex-col grow px-4 sm:w-full lg:max-w-[40%] h-full ">
            <div className=" w-full flex flex-col   pb-3 border-b-2 border-yellow-200 ">
              <div className=" flex flex-col">
                <div className="flex flex-col ">
                  <h3 className="text-sm pb-4 text-gray-500 uppercase">
                    {item.color}
                  </h3>
                  <h1 className="text-xl uppercase font-bold pb-1">
                    {info.title}
                  </h1>
                  <h2 className="text-xl font-semibold">
                    $ {info.price.toFixed(2)}
                  </h2>
                </div>

                <div className=" flex flex-wrap  py-2 ">
                  <p className=" h-full w-full break-all">{info.description}</p>
                </div>

                <div className="flex h-16 ">
                  <div className="flex gap-2 h-full  items-center">
                    {info.color.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => colorHandler(index, item)}
                        className={` rounded-full    ring-[0.5px] ring-offset-0 w-8 h-8 ${
                          activeColor.colorCode == item.colorCode
                            ? `ring-offset-1 ring-[#000000]`
                            : "ring-offset-0 ring-[#d1d1d4]"
                        }`}
                        style={{ backgroundColor: `${item.colorCode}` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <h3>Talla: {activeColor.tallaActive.talla}</h3>

                
              <div className="flex ">
<DocumentTextIcon className="h-6 w-6"></DocumentTextIcon>
              <h3>Size Chart</h3>

              </div>
              </div>

              <div className=" h-12  my-2">
                <div className="h-full  flex gap-1">
                  {activeColor.talla.map((item, index) => (
                    <div
                      key={item._id}
                      className={`flex justify-center items-center  w-12 h-full border border-gray-300 lg:hover:border-gray-700 transition-all duration-200 cursor-pointer ${
                        item.talla == activeColor.tallaActive
                          ? "border-[#000000] shadow-inner"
                          : ""
                      }`}

                      onClick={() => sizeHandler(item)}
                    >
                      <div className="">{item.talla}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <CartButton item={item}></CartButton>
              </div>

              <div className="h-12 flex items-center">
              <Stocker stock={activeColor.tallaActive.stock} ></Stocker>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
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
    props: info,
    revalidate: 60, // will be passed to the page component as props
  };
}
