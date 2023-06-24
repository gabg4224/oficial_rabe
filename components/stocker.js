import { useState } from "react";
export default function Stock({stock}) {

const [data, setfirst] = useState(stock)
console.log(data)
  return (
    <>
      <div className=" flex flex-col py-4 w-full justify-center gap-2">
        <div className="flex h-full items-center">
          <div className="relative w-4 h-full flex items-center pt-1">
            <div className={`w-2 h-2 ${stock?"bg-green-600":"bg-red-600"} rounded-full absolute `}></div>
            <div className={`w-2 h-2 ${stock?"bg-green-600":"bg-red-600"} rounded-full absolute animate-ping-slow `}></div>
          </div>
          <div className="h-full justify-center flex items-center">
            <h3 className={`${stock?"text-green-600":"text-red-600"}`}>{stock?"Stock:":"No Stock"}</h3>
            <h3 className={`${stock?"text-green-600":"text-red-600"} pl-1`}>{stock?stock:""}</h3>
          </div>
        </div>

        <div className=" w-full relative h-1">
          <span className={`w-full h-full absolute ${stock?"bg-green-600":"bg-red-600"}`}></span>
        </div>
      </div>
    </>
  );
}
