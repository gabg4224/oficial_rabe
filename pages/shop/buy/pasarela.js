import { useAppContext } from "@/components/contextWrapper";
import Image from "next/image";
import { getTotal } from "@/utils/utilsFunctions";
export default function Pasarela() {
  const cart = useAppContext();
  return (
    <>
      <section className="w-full h-[80vh] min-h-[80vh] max-h-max">
        <div className="w-3/4 h-full m-auto  grid grid-cols-2 grid-rows-2 bg-white">
          <div className=" col-span-1 row-span-2  flex justify-center items-center  flex-col">
            <div className="w-9/12 h-5/6 bg-white border p-2 overflow-y-scroll mb-3">
              {cart.items.map((items) => {
                console.log(items);
                return (
                  <div key={items.id} className="w-full border-b-[1px] flex ">
                    <div className="py-2  flex grow">
                      <div>
                        <Image
                          src={items.images[0].imagen}
                          width={60}
                          height={60}
                        ></Image>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <p className="uppercase">{items.title}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <p className="text-sm text-gray-500">
                            Talla: {items.tallaActive.talla}
                          </p>
                          <p className="text-sm text-gray-500  uppercase">
                            {items.colorName}
                          </p>
                        </div>

                        <div className=" flex items-center gap-2">
                          <p className="text-sm text-gray-500">
                            Precio: {items.price}
                          </p>
                          <p className="text-sm text-gray-500">
                            Cantidad: {items.quantity}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow flex justify-end items-center">
                      <p>${(items.price * items.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}

              <div className=" w-full flex justify-center mt-4">


             
              </div>
            </div> 
            <div className="  bg-black  py-4 sm:w-full lg:w-48 flex justify-center ">
                <p
                  href={"/shop/buy/pasarela"}
                  className="text-white  uppercase  font-medium text-sm  text-center "
                >
                  Total • ${getTotal()}
                </p>
              </div>
          </div>

          <div className="col-span-1 row-span-2 bg-red-500"></div>
        </div>
      </section>
    </>
  );
}
