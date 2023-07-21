import { useState } from "react";
import QuantityController from "./qtyController";
import Image from "next/image";
export default function ShoppingItemView({info}) {

  
    return(


     
        <li key={info.id} className="flex py-3 items-center border-t">
          <div className="h-28  w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <Image
              src={info.images[0].imagen}
              width={3000}
              height={2000}
              alt="shopping item"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="pl-4 flex flex-1 flex-col">
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3 className="uppercase">
                 {info.title}
                </h3>
                <p className="pl-4">${(info.price * info.quantity).toFixed(2)}</p>
              </div>
              <p className="pt-1 text-sm text-gray-500">Talla {info.tallaActive.talla}</p>
              <p className="pt-1 text-sm text-gray-500 font-semibold uppercase">{info.colorName}</p>
            </div>
            <div className="flex flex-1 pt-1 items-center gap-2  text-sm">
              <QuantityController view={"ShoppingCart"} item={info}></QuantityController>
            </div>
          </div>
        </li>
 
    )
}