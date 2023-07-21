import { useAppContext } from "@/components/contextWrapper";
import Image from "next/image";
import QuantityController from "@/components/qtyController";
import Link from "next/link";
export default function Buy() {
  const cart = useAppContext();

  const getTotal = () => {
    const total = cart.items
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
    const totalFixed = total.t;
    return total;
  };
  return (
    <>
      <section className="w-full flex justify-center min-h-screen">
        <div className="w-2/4 pt-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
            <div className="flex justify-between text-sm uppercase font-light pb-3 mb-3 border-b-[1px]">
              <p>product</p>
              <p>quantity</p>
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
                        {items.tallaActive.talla}
                      </p>
                      <p className="text-sm text-gray-500  uppercase">
                        {items.colorName}
                      </p>
                    </div>
                  </div>

                  <div className="grow flex items-center pl-4">
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

          <div className="w-full flex justify-between">
            <div>
              <Link href={"/"}  className="border-b-2 border-gray-400">Continuar Comprando</Link>
            </div>
            <div>
              <button className="text-white  uppercase bg-black  font-medium text-sm px-24 py-4 text-center ">
                Checkout • ${getTotal()}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
