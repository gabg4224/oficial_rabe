import Link from "next/link";
import View from "./view";
import { useState } from "react";
import { ButtonCreateProduct } from "./buttons";

export function Catalog({ info, view }) {

  if (view == "homePage") {
    return (
      <section className="bg-white w-full  py-14 ">
        <div className="flex flex-col items-center">
          <div className="m-auto text-center">
            <h4 className="capitalize font-bold text-sm">shop all design</h4>
            <h5 className="capitalize font-bold  text-md mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </h5>
          </div>

          <div className="flex-col w-full items-center justify-center flex pt-8">
            <div className="flex justify-center items-center mb-12">
              <ul className="flex gap-3 ">
                <Link href={"/"}>All Design</Link>
                <Link href={"/"}>All Design</Link>
                <Link href={"/"}>All Design</Link>
                <Link href={"/"}>All Design</Link>
              </ul>
            </div>
            <ItemsTable info={info} view={"card"}></ItemsTable>
          </div>
        </div>
      </section>
    );
  }
  else if (view == "homePageAdmin") {
    return (
      <section className="bg-white w-full  py-14 ">
        <div className="flex flex-col items-center">
        
<ButtonCreateProduct></ButtonCreateProduct>
          <div className="flex-col w-full items-center justify-center flex ">
            <div className="flex justify-center items-center mb-12">
              <ul className="flex gap-3 ">
                <Link href={"/"}>All Design</Link>
                <Link href={"/"}>All Design</Link>
                <Link href={"/"}>All Design</Link>
                <Link href={"/"}>All Design</Link>
              </ul>
            </div>
            <ItemsTable info={info} view={"cardAdmin"}></ItemsTable>
          </div>
        </div>
      </section>
    );
  }
}

export function ItemsTable({ info,view}) {
  const [displayCount, setDisplayCount] = useState(8);

  const loadMoreItems = () => {
    setDisplayCount(displayCount + 8);
  };
  
  if (view ==="cardAdmin") {

    return (
      <>
    <div className="flex flex-col">
          <div className="grid  w-full  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
            {info &&
              info
                .slice(0, displayCount)
                .map((items, index) => (
                  
                  <View  key={index} view={"cardAdmin"} info={items}></View>
                ))}
          </div>
        
          {info.length > displayCount && (
            <div className=" flex justify-center items-center pt-2">
              <button className="bg-black text-white hover:text-black hover:bg-white outline-1 outline outline-black p-[0.35rem] px-6 rounded-lg transition-all duration-300 " onClick={loadMoreItems}>Load More</button>
            </div>
          )}
        </div>
      </>
    );
    
  }

  if (view==="card") {

    return (
      <>
    <div className="flex flex-col lg:gap-4">
          <div className="grid  w-full   sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
            {info &&
              info
                .slice(0, displayCount)
                .map((items, index) => (
                  
                  <View  key={index} view={"card"} info={items}></View>
                ))}
          </div>
         
          {info.length > displayCount && (
            <div className=" flex justify-center items-center pt-2">
              <button className="bg-black text-white hover:text-black hover:bg-white outline-1 outline outline-black p-[0.35rem] px-6 rounded-lg transition-all duration-300 " onClick={loadMoreItems}>Load More</button>
            </div>
          )}
        </div>
      </>
    );
    
  }
}
