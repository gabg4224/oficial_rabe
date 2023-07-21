
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "./contextWrapper";

import ShoppingItemView from "./shoppingItemView";
import Link from "next/link";

export default function ShoppingCart() {
  const cart = useAppContext();

  const getTotal = () => {
    const total = cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ).toFixed(2);
    const totalFixed = total.t
    return total;
  };

  return (
    <>
      <div
        className={`fixed inset-0 -z-10" bg-gray-500 bg-opacity-75 opacity-0    transition-all duration-500 ${
          cart.isOpen ? "opacity-100 z-30 " : "opacity-0 -z-10"
        }`}
      />
      <div
        className={`fixed top-0 z-40 sm:w-[75%]  md:w-[50%] lg:w-[25%] bg-white max-h-screen  h-screen transition-all duration-700  ${
          cart.isOpen ? "right-0 " : " sm:-right-3/4 md:-right-1/2 lg:-right-1/4"
        }`}
      >
        <div className=" block max-h-full h-full">
          <div className="w-full h-full max-h-full  flex flex-col ">
            <div className="flex justify-between pt-6 px-3">
              <p className="capitalize text-lg font-semibold text-slate-700 ">
                shopping cart
              </p>
              <button
                type="button"
                className=" text-gray-400 hover:text-gray-500"
                onClick={cart.closeCart}
              >
                <span className="sr-only">Close panel</span>
                <XMarkIcon className="h-6 w-6"  aria-hidden="true" />
              </button>
            </div>
            <div className=" px-3 pt-8 flex flex-col flex-grow h-full overflow-y-auto">
              <div className="flex flex-col overflow-y-scroll">
                <ul className="">
                  {cart.items.map((item) => (
                    <ShoppingItemView
                      key={item.id}
                      info={item}
                    ></ShoppingItemView>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full bg-gray-200 flex flex-col  items-center  py-4">
              <div className="flex w-11/12 justify-between text-sm font-bold pb-3">
                <p>Subtotal</p>
                <p>${getTotal()}</p>
              </div>
              <div className="w-11/12 flex justify-center items-center py-1 flex-col">
                <button className=" text-white flex justify-center items-center py-1  font-bold  text-xs bg-black rounded-sm w-full">
                  Check Out
                </button>
                <Link href={"/shop/buy"}>
                  <p onClick={cart.closeCart} className="underline text-xs text-gray-500 pt-1 hover:text-gray-600">
                    view cart
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
