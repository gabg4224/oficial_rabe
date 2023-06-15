import { useAppContext } from "./contextWrapper";

export default function CartButton({ item }) {
  const cart = useAppContext();
 
  const handleClick = () => {
    cart.openCart()
    console.log(item);

    item.quantity = 1;
    return cart.addItemToCart(item);
  };
  return (
    <button
      className="text-white w-full bg-black  font-medium text-sm px-5 py-2.5 text-center "
      onClick={handleClick}
    >
      Add to cart
    </button>
  );
}
