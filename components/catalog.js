import Link from "next/link";
import View from "./view";
import { useState } from "react";
import { ButtonCreateProduct } from "./buttons";
import { variablesCatalog } from "@/utils/constantes";
import { Suspense } from "react";
export function Catalog({ info, view }) {
  if (view == variablesCatalog.normalCatalog.homePage) {
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
            <Suspense fallback={<>Loading...</>}>
              <ItemsTable
                info={info}
                view={variablesCatalog.normalCatalog.card}
              ></ItemsTable>
            </Suspense>
          </div>
        </div>
      </section>
    );
  } else if (view == variablesCatalog.adminCatalog.homePage) {
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
          <Suspense>
            <ItemsTable
              info={info}
              view={variablesCatalog.adminCatalog.card}
            ></ItemsTable>
            </Suspense>
          </div>
        </div>
      </section>
    );
  }
}

export function ItemsTable({ info, view }) {
  const [displayCount, setDisplayCount] = useState(8);

  const loadMoreItems = () => {
    setDisplayCount(displayCount + 8);
  };

  if (view === variablesCatalog.adminCatalog.card) {
    return (
      <>
        <div className="flex flex-col">
          <div className="grid  w-full   sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
            {info &&
              info
                .slice(0, displayCount)
                .map((items, index) => (
                  <View
                    key={index}
                    view={variablesCatalog.adminCatalog.card}
                    info={items}
                  ></View>
                ))}
          </div>

          {info.length > displayCount && (
            <div className=" flex justify-center items-center pt-2">
              <button
                className="bg-black text-white hover:text-black hover:bg-white outline-1 outline outline-black p-[0.35rem] px-6 rounded-lg transition-all duration-300 "
                onClick={loadMoreItems}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </>
    );
  }

  if (view === variablesCatalog.normalCatalog.card) {
    return (
      <>
        <div className="flex flex-col lg:gap-4 lg:max-w-5xl w-full">
          <div className="grid  w-full   sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
            {info &&
              info
                .slice(0, displayCount)
                .map((items, index) => (
                  <View
                    key={index}
                    view={variablesCatalog.normalCatalog.card}
                    info={items}
                  ></View>
                ))}
          </div>

          {info.length > displayCount && (
            <div className=" flex justify-center items-center pt-2">
              <button
                className="bg-black text-white hover:text-black hover:bg-white outline-1 outline outline-black p-[0.35rem] px-6 rounded-lg transition-all duration-300 "
                onClick={loadMoreItems}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}
