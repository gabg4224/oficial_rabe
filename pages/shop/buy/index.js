import { useAppContext } from "@/components/contextWrapper";
import Image from "next/image";
import QuantityController from "@/components/qtyController";
import Link from "next/link";
import { getTotal } from "@/utils/utilsFunctions";
export default function Buy() {
  const cart = useAppContext();

  
  return (
    <>
      <section className="w-full flex justify-center min-h-screen">
        <div className="sm:w-11/12 md:w-11/12 lg:w-2/4 pt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
            <div className="flex justify-between text-sm uppercase font-light pb-3 mb-3 border-b-[1px]">
              <p>product</p>
              <p className="sm:hidden md:flex">quantity</p>
              <p>total</p>
            </div>
          </div>
          <div className="mb-8">
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
                      <div className="sm:flex md:hidden">
                        <QuantityController
                          view={"buyCart"}
                          item={items}
                        ></QuantityController>
                      </div>
                    </div>
                  </div>

                  <div className=" sm:hidden md:flex grow flex items-center pl-4">
                    <QuantityController
                      view={"buyCart"}
                      item={items}
                    ></QuantityController>
                  </div>
                  <div className="grow flex justify-end items-center">
                    <p>${(items.price * items.quantity).toFixed(2)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full flex justify-between ">
            <div className="sm:hidden lg:block">
              <Link href={"/"} className="border-b-2 border-gray-400">
                Continuar Comprando
              </Link>
            </div>
            <div className=" bg-black  py-4 sm:w-full lg:w-48 flex justify-center">
              <Link
                href={"/shop/buy/pasarela"}
                className="text-white  uppercase  font-medium text-sm  text-center "
              >
                Checkout • ${getTotal()}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
