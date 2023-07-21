import { useAppContext } from "./contextWrapper";
import { TrashIcon } from "@heroicons/react/20/solid";
export default function QuantityController({ item, view }) {
  const cart = useAppContext();

  const handleClick = (value) => {
    if (value === "add") {
      cart.addOneItem(item);
      console.log(item);
    }
    if (value === "sub") {
      cart.subOneItem(item);
      console.log(item);
    }
    if (value === "remove") {
      cart.removeItem(item);
      console.log(item + " " + "remove");
    }
  };

  if (view == "ShoppingCart") {
    return (
      <>
        <div className="w-1/3 bg-gray-400 p-1 rounded-sm text-md font-medium">
          <div className="w-full flex justify-between">
            <button
              className="flex justify-center items-center "
              onClick={() => {
                handleClick("sub");
              }}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className=""
              onClick={() => {
                handleClick("add");
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => {
              handleClick("remove");
            }}
            type="button"
            className="font-medium underline text-gray-500 hover:text-gray-600"
          >
            Remove
          </button>
        </div>
      </>
    );
  }

  if (view == "buyCart") {
    return (
      <>
        <div className="flex">
          <div className="w-20 h-12 border p-1 rounded-sm text-md font-medium flex items-center mr-3">
            <div className="w-full flex justify-between">
              <button
                className="flex justify-center items-center "
                onClick={() => {
                  handleClick("sub");
                }}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                className=""
                onClick={() => {
                  handleClick("add");
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                handleClick("remove");
              }}
              type="button"
              className="font-medium underline text-gray-500 hover:text-gray-600"
            >
            <TrashIcon  className="w-4 text-red-600 "></TrashIcon>
            </button>
          </div>
        </div>
      </>
    );
  }
}
