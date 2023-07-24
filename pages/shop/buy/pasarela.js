import { useAppContext } from "@/components/contextWrapper";
import Image from "next/image";

export default function Pasarela() {

    const cart = useAppContext()
  return (
    <>
      <section className="w-full h-[80vh] min-h-[80vh] bg-black">
        <div className="w-3/4 h-full m-auto  grid grid-cols-2 grid-rows-2 bg-white">
          <div className=" col-span-1 row-span-2 bg-slate-500 flex justify-center items-center">
            <div className="w-9/12 h-5/6 bg-white">

            {cart.items.map((items) => {
              console.log(items);
              return (
                <div key={items.id} className="w-full border-b-[1px] flex ">
                  <div className="py-2  flex grow">
                    <div>
                      <Image
                        src={items.images[0].imagen}
                        width={120}
                        height={120}
                      ></Image>
                    </div>

                    <div>
                      <p className="uppercase">{items.title}</p>
                      <p className="text-sm text-gray-500">
                        Talla: {items.tallaActive.talla}
                      </p>
                      <p className="text-sm text-gray-500  uppercase">
                        {items.colorName}
                      </p>
                    
                    </div>
                  </div>

                
                  <div className="grow flex justify-end items-center">
                    <p>${(items.price * items.quantity).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          <div className="col-span-1 row-span-2 bg-red-500"></div>
        </div>
      </section>
    </>
  );
}
