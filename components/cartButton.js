import { set } from "mongoose";
import { useAppContext } from "./contextWrapper";
import { useState,useEffect } from "react";
import Stock from "./stocker";


export default function CartButton({ item }) {


  useEffect(() => {
    setInfo({...item, quantity:1})
  }, [item]);


const [info, setInfo] = useState({
  ...item
})
  const cart = useAppContext();
 
  const handleClick = () => {
    cart.openCart()
console.log(info)
    cart.addItemToCart(info);
    return true
  };



  if (info.tallaActive.stock > 0) {
    return (


      <button
      className="text-white w-full bg-black  font-medium text-sm px-5 py-2.5 text-center "
      onClick={handleClick}
    >
      Add to cart
    </button>
    )
    
  }

  if (info.tallaActive.stock == 0) {
    return (


      <div
      className="text-black w-full bg-gray-300 opacity-80  font-medium text-sm px-5 py-2.5 text-center "
      
    >
      No stock
    </div>
    )
    
  }
}
