import Image from "next/image";
import Link from "next/link";
import QuantityController from "./qtyController";
import { useState } from "react";
import { getFriendlyTitle } from "@/utils/utilsFunctions";
import DeleteButton from "./deleteButton";
import EditButton from "./editButton";

export default function View({ view, info }) {
  const [activeColor, setActiveColor] = useState({
    colorCode: info.color[0].colorCode,
    images: info.color[0].imagenes
  });

  const colorHandler = (index, infoItem) => {
    console.log(activeColor.images);
    setActiveColor({
      colorCode: infoItem.colorCode,
      images: infoItem.imagenes
    });
  };

  if (view == "card") {
    return (
      <>
        <li
       
          className="flex relative justify-self-center  box-border flex-col w-auto max-w-[17rem] md:max-w-[15rem] h-auto p-2 group  mb-3 "
        >
          <div className="h-full relative pb-3">
            <Link href={`/shop/cargos/${getFriendlyTitle(info.title)}`}>
              <div className="bg-[#f3f3f5] flex justify-center items-center h-60 relative z-10">
                <Image
                  src={`${activeColor.images[0].imagen}`}
                  width={300}
                  height={200}
                  alt="camisa"
                ></Image>
              </div>
              <div className="bg-[#f3f3f5] h-60 inset-0 flex justify-center items-center absolute z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <Image
                  src={`${activeColor.images[1].imagen}`}
                  width={3000}
                  height={2000}
                  alt="camisa"
                ></Image>
              </div>
            </Link>

            <div className="block inset-0 relative z-20 flex-col  items-start pt-3">
              <div className="pb-3 flex flex-col gap-2 ">
              <h3 className="text-xs uppercase text-black font-semibold">
                  {info.title}
                </h3>
                <p className="text-xs">${info.price.toFixed(2)} USD</p>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  {info.color &&
                    info.color.map((item, index) => (
                      <div
                      key={index}
                      onClick={() => colorHandler(index, item)}
                      className={` rounded-full  cursor-pointer   ring-[1px] ring-offset-0 w-5 h-5 ${
                        activeColor.colorCode == item.colorCode
                          ? `ring-offset-2 ring-[#000000]`
                          : "ring-offset-0 ring-[#d1d1d4]"
                      }`}
                    style={{ backgroundColor:`${item.colorCode}` }}>
                      
                    </div>
                    ))}
                </div>
              </div>
            </div>

            <div className=" bg-white group-hover:shadow-md group-hover:shadow-black/25 group-hover:scale-110  absolute top-0 h-full w-full z-0 transition-all duration-500"></div>
          </div>
        </li>
      </>
    );
  }

  if (view == "cardAdmin") {
    return (
      <>
        <div className="flex relative justify-self-center  box-border flex-col w-auto max-w-[17rem] md:max-w-[15rem] h-auto p-2 group cursor-pointer mb-3 ">
          <div className="h-full relative ">
            <div>
              <div className="bg-[#f3f3f5] flex justify-center items-center h-60 relative z-10">
                <Image
                  src={`${activeColor.images[0].imagen}`}
                  width={300}
                  height={200}
                  alt="camisa"
                ></Image>
              </div>
              <div className="bg-[#f3f3f5] h-60 inset-0 flex justify-center items-center absolute z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <Image
                  src={`${activeColor.images[1].imagen}`}
                  width={3000}
                  height={2000}
                  alt="camisa"
                ></Image>
              </div>
            </div>

            <div className="block inset-0 relative z-20 flex-col  items-start pt-3">
              <div className="pb-3 flex flex-col gap-2 ">
                <h3 className="text-xs uppercase text-black font-semibold">
                  {info.title}
                </h3>
                <p className="text-xs">${info.price.toFixed(2)} USD</p>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  {
                    info.color.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => colorHandler(index, item)}
                        className={` rounded-full    ring-[0.5px] ring-offset-0 w-5 h-5 ${
                          activeColor.colorCode == item.colorCode
                            ? `ring-offset-1 ring-[#000000]`
                            : "ring-offset-0 ring-[#d1d1d4]"
                        }`}
                      style={{ backgroundColor:`${item.colorCode}` }}>
                        
                      </div>
                    ))}
                </div>
              </div>
              <div className="w-full flex justify-center mt-4 gap-3">
                <EditButton productId={info._id}></EditButton>
                <DeleteButton productId={info._id} />
              </div>
            </div>

            <div className=" bg-white group-hover:shadow-md group-hover:shadow-black/25 group-hover:scale-110 absolute top-0 h-full w-full z-0 transition-all duration-500"></div>
          </div>
        </div>
      </>
    );
  }

  if (view === "shopping item") {
    return (
      <>
        <li key={info.id} className="flex py-3 items-center border-t">
          <div className="h-28  w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <Image
              src={"/images/franela.png"}
              width={3000}
              height={2000}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="pl-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <a href={info.href}>{info.title}</a>
                </h3>
                <p className="pl-4">{info.price.toFixed(2)}</p>
              </div>
              <p className="pt-1 text-sm text-gray-500">Talla {info.size}</p>
              <p className="pt-1 text-sm text-gray-500">{info.color}</p>
            </div>
            <div className="flex flex-1 pt-1 items-center gap-2  text-sm">
              <QuantityController item={info}></QuantityController>
            </div>
          </div>
        </li>{" "}
      </>
    );
  }
}
