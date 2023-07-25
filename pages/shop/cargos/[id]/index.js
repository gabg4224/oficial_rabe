import { getInfoProducts, getPathsFromId } from "@/utils/utilsFunctions";
import { useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/20/solid";
import Stocker from "@/components/stocker";
import CartButton from "@/components/cartButton";
import Slider from "@/components/slider";
export default function CargosDinamic({ info }) {
  console.log(info);
  const colorHandler = (index, infoItem) => {
    setActiveColor({
      ...activeColor,
      colorName: infoItem.colorTitle,
      talla: infoItem.tallas,
      colorCode: infoItem.colorCode,
      images: infoItem.imagenes,
      tallaActive: infoItem.tallas[0],
      id: infoItem.tallas[0]._id,
    });
  };

  const [activeColor, setActiveColor] = useState({
    talla: info.color[0].tallas,
    tallaActive: info.color[0].tallas[0],
    colorName: info.color[0].colorTitle,
    colorCode: info.color[0].colorCode,
    images: info.color[0].imagenes,
    detalles: info.detalles,
    price: info.price,
    title: info.title,
    id: info.color[0].tallas[0]._id,
  });

  const sizeHandler = (item) => {
    setActiveColor({
      ...activeColor,
      tallaActive: item,
      id: item._id,
    });
  };

  return (
    <>
      <div className="h-6 "></div>

      <div className="w-full  sm:h-auto  lg:h-screen  pt-4 flex justify-center ">
        <div className="flex sm:flex-col lg:max-h-168 lg:flex-row h-full sm:w-full lg:w-[70%] justify-center">
          <div className="lg:w-2/4 sm:w-full  lg:max-w-2xl   flex justify-center    lg:h-full">
            <div className="h-full sm:w-11/12 bg-zinc-300 sm:py-14 lg:py-14  ">
              {info && <Slider info={activeColor.images}></Slider>}
              {/* <Image
                src={activeColor.images[0].imagen}
                width={3000}
                height={3000}
                alt="asad"
  ></Image>*/}
            </div>
          </div>

          <div className="w-full flex md:justify-center lg:justify-normal">
            <div className="flex flex-col sm:pt-7 lg:py-0  px-4 sm:w-full md:w-[90%]  lg:max-w-xl h-full ">
              <div className=" w-full flex flex-col   pb-3 border-b-2 border-gray-100 ">
                <div className=" flex flex-col">
                  <div className="flex flex-col ">
                    <h3 className="text-sm pb-4 text-gray-500 uppercase">
                      {activeColor.colorName}
                    </h3>
                    <h1 className="text-xl uppercase font-bold pb-1">
                      {info.title}
                    </h1>
                    <h2 className="text-xl font-semibold">
                      $ {info.price.toFixed(2)}
                    </h2>
                  </div>
                  <div className=" flex flex-wrap  py-2 ">
                    <p className="break-words mb-4">{info.description}</p>

                    <div className=" w-full text-gray-500 ">
                      <h3>Detalles:</h3>

                      <div>
                        <ul className="flex flex-wrap ">
                          {activeColor.detalles.map((item, index) => {
                            if (item.detalle !== "") {
                              return (
                                <li key={item._id} className="basis-1/2 text-xs py-2 flex flex-wrap ">
                                  {item.detalle}
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    </div>
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
                <div className="flex justify-between sm:mb-3 lg:m-0">
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
                          item.talla == activeColor.tallaActive.talla
                            ? "border-[#000000] bg-black text-white"
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
                  <CartButton item={activeColor}></CartButton>
                </div>

                <div className="h-12 flex items-center sm:py-8">
                  <Stocker stock={activeColor.tallaActive.stock}></Stocker>
                </div>
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
